import { createRequire } from 'node:module';
import { readFile, writeFile, readdir, mkdir, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const wranglerRequire = createRequire(require.resolve('wrangler/package.json'));
const { Miniflare } = wranglerRequire('miniflare');
const server = resolve('dist/server');
const files = await readdir(server, { recursive:true });
const modules = ['index.js',...files.filter(f=>f.endsWith('.js') && f!=='index.js')].map(f=>({type:'ESModule',path:resolve(server,f)}));
const mf = new Miniflare({ modules, modulesRoot:server, compatibilityDate:'2026-05-15', compatibilityFlags:['nodejs_compat'], d1Databases:['DB'], cf:false });
const checks = [];
function ok(name) { checks.push(name); console.log('PASS',name); }
const origin='https://srk-interiors-chintamani.pvvardhanreddy28.chatgpt.site';
async function post(data,headers={}) { return mf.dispatchFetch(origin+'/api/consultations',{method:'POST',headers:{'content-type':'application/json',origin,'cf-connecting-ip':'192.0.2.20',...headers},body:JSON.stringify(data)}); }
try {
 const db=await mf.getD1Database('DB');
 for(const file of (await readdir('drizzle')).filter(f=>f.endsWith('.sql')).sort()) {
   const statements=(await readFile('drizzle/'+file,'utf8')).split(';').map(s=>s.replace(/--> statement-breakpoint/g,'').trim()).filter(Boolean);
   await db.batch(statements.map(sql=>db.prepare(sql)));
 }
 ok('Generated database migrations execute successfully');
 const home=await mf.dispatchFetch(origin+'/'); const html=await home.text();
 await mkdir('.sites-runtime/qa',{recursive:true}); await writeFile('.sites-runtime/qa/home.html',html);
 assert.equal(home.status,200,html.slice(0,800)); assert.match(html,/Beautiful interiors/); assert.match(html,/Interior Designers in Chintamani/); assert.equal((html.match(/<h1\b/g)||[]).length,1); ok('Homepage server-renders business content, title and exactly one H1');
 const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]));
 for (const link of html.matchAll(/href="#([^"]+)"/g)) assert(ids.has(link[1]),'Missing section '+link[1]);
 for (const img of html.matchAll(/<img\b[^>]*>/g)) assert(/\balt="[^"]*"/.test(img[0]),'Image missing alternative text');
 ok('All on-page links target existing sections and images have alt attributes');
 for (const asset of html.matchAll(/(?:src|href)="(\/(?:brand|images)\/[^"?]+|\/favicon.svg)"/g)) await access('public'+asset[1]);
 ok('Referenced local images, logos and favicon exist');
 assert.match(html,/<link[^>]+rel="canonical"[^>]+href="https:\/\/srk-interiors-chintamani/); ok('Homepage has an absolute canonical URL');
 const schemas=[...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m=>JSON.parse(m[1])); assert(schemas.some(s=>s['@graph'].some(g=>g['@type']==='ProfessionalService'))); ok('Structured data is valid JSON with business, website and visible FAQ records');
 assert(!html.includes('googletagmanager.com/gtag/js')); ok('No analytics script loads without configuration and consent');
 for(const route of ['/privacy','/robots.txt','/sitemap.xml']) { const res=await mf.dispatchFetch(origin+route); assert.equal(res.status,200,route); const body=await res.text(); await writeFile('.sites-runtime/qa/'+route.slice(1).replace(/\//g,'_')+'.txt',body); ok(route+' returns HTTP 200'); }
 const absent=await mf.dispatchFetch(origin+'/page-that-does-not-exist'); assert.equal(absent.status,404); ok('Unknown paths return a real 404');
 let data={name:'SRK QA TEST',phone:'9876543210',requirement:'Modular Kitchen',message:'Synthetic integration test only. Do not contact.',consent:true,website:'',requestId:crypto.randomUUID()};
 let response=await post(data); assert.equal(response.status,201);const saved=await response.json();assert(saved.ok&&saved.receipt);ok('Valid consultation returns success only after committing a record');
 let row=await db.prepare('SELECT * FROM consultations WHERE id = ?').bind(saved.receipt).first();assert.equal(row.phone,'+919876543210');assert.equal(row.name,data.name);assert.equal(row.consent,1);ok('Stored lead preserves expected content, normalized phone and consent');
 response=await post(data);assert.equal(response.status,200);assert.equal((await response.json()).receipt,saved.receipt);assert.equal((await db.prepare('SELECT COUNT(*) AS total FROM consultations').first()).total,1);ok('Identical retry returns the same receipt without a duplicate lead');
 response=await post({...data,message:'Changed payload'});assert.equal(response.status,409);ok('Reusing a submission ID for changed data is rejected');
 for(const [name,change] of [['invalid mobile',{phone:'123'}],['missing consent',{consent:false}],['unsupported service',{requirement:'Invalid service'}],['spam honeypot',{website:'https://spam.example'}],['empty name',{name:''}],['control-only name',{name:'\u0001\u0002'}],['oversized message',{message:'x'.repeat(1501)}]]) { response=await post({...data,requestId:crypto.randomUUID(),...change});assert.equal(response.status,422,name);ok(name+' is rejected server-side'); }
 response=await post({...data,requestId:crypto.randomUUID()},{origin:'https://attacker.example','sec-fetch-site':'cross-site'});assert.equal(response.status,403);ok('Cross-origin submission is rejected');
 response=await post({...data,requestId:crypto.randomUUID()},{'content-type':'text/plain'});assert.equal(response.status,415);ok('Unsupported content type is rejected');
 response=await post({...data,requestId:crypto.randomUUID(),message:'x'.repeat(9000)});assert.equal(response.status,413);ok('Oversized request body is rejected');
 response=await mf.dispatchFetch(origin+'/api/consultations');assert.equal(response.status,405);ok('Public API does not expose saved enquiries');
 for(let i=0;i<4;i++) {response=await post({...data,requestId:crypto.randomUUID()});assert.equal(response.status,201);}
 response=await post({...data,requestId:crypto.randomUUID()});assert.equal(response.status,429);assert(response.headers.has('retry-after'));ok('Rate limiter blocks the sixth distinct request within ten minutes');
 const before=await db.prepare('SELECT COUNT(*) AS total FROM consultations').first();assert.equal(before.total,5);ok('Rejected requests are not stored');
 await db.prepare('DELETE FROM consultations').run(); await db.prepare('DELETE FROM rate_limits').run();ok('All synthetic test records are confined to and removed from the test database');
 await writeFile('.sites-runtime/qa/integration-results.json',JSON.stringify({date:new Date().toISOString(),checks,passed:checks.length},null,2));
 console.log(JSON.stringify({passed:checks.length}));
} finally {await mf.dispose();}
