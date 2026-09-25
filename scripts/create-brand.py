from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
import zipfile
p=Path('public/brand'); p.mkdir(parents=True,exist_ok=True)
serif=TTFont('/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf')
sans=TTFont('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf')
def text_paths(text,font,x,y,size,color,spacing=0):
    glyphs=font.getGlyphSet(); cmap=font.getBestCmap(); scale=size/font['head'].unitsPerEm; out=[]
    for ch in text:
        name=cmap.get(ord(ch),'space'); pen=SVGPathPen(glyphs); glyphs[name].draw(pen)
        out.append(f'<path d="{pen.getCommands()}" transform="translate({x:.3f} {y}) scale({scale:.5f} {-scale:.5f})" fill="{color}"/>')
        x+=glyphs[name].width*scale+spacing
    return ''.join(out)
def emblem(color):
    return f'<path d="M19 91 A51 51 0 1 1 109 91" fill="none" stroke="{color}" stroke-width="3" stroke-linecap="round"/>'+text_paths('SRK',serif,24,61,31,color)+f'<path d="M11 106L46 76L83 106M20 106L46 84L73 106M73 91L86 80L116 106M25 94V82H32" fill="none" stroke="{color}" stroke-width="3" stroke-linejoin="round"/><path d="M43 94H47V98H43ZM50 94H54V98H50ZM43 101H47V105H43ZM50 101H54V105H50ZM85 95H89V99H85ZM92 95H96V99H92Z" fill="{color}"/><path d="M15 116H114" stroke="{color}" stroke-width="2"/>'
def svg(body,w,h): return f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="SRK Interiors"><title>SRK Interiors</title>{body}</svg>'
def horizontal(name,color,word,bg=None):
    body=(f'<rect width="280" height="102" rx="4" fill="{bg}"/>' if bg else '')+f'<g transform="translate(1 0) scale(.78)">{emblem(color)}</g>'+text_paths('SRK',serif,117,57,49,word,3)+text_paths('INTERIORS',sans,121,80,14,word,3.3)
    (p/name).write_text(svg(body,280,102))
horizontal('srk-primary.svg','#ad8036','#20211f')
horizontal('srk-gold-on-black.svg','#c99a3d','#d6b36e','#171916')
horizontal('srk-gold-on-white.svg','#ad8036','#20211f','#ffffff')
horizontal('srk-white.svg','#ffffff','#ffffff')
horizontal('srk-transparent.svg','#ad8036','#20211f')
(p/'srk-compact.svg').write_text(svg(emblem('#ad8036'),128,128))
(p/'srk-profile.svg').write_text(svg('<rect width="128" height="128" rx="16" fill="#171916"/>'+emblem('#d6b36e'),128,128))
favicon=svg('<rect width="64" height="64" rx="12" fill="#171916"/><path d="M12 27L32 11L52 27" fill="none" stroke="#c99a3d" stroke-width="3"/>'+text_paths('S',serif,18,51,31,'#d6b36e'),64,64)
(p/'srk-favicon.svg').write_text(favicon); Path('public/favicon.svg').write_text(favicon)
(p/'README.txt').write_text('SRK INTERIORS — refined website logo assets\nOriginal reference: user-supplied Untitled design_20260218_185901_0000.pdf.\nThe circle, roofs, SRK lettering and gold identity are retained in simplified vector form.\nPrimary / white / transparent / gold on black / gold on white / compact / profile / favicon SVG variants included.\nAll lettering is outlined. SVG files do not require fonts.\nGold #C99A3D; dark gold #AD8036; charcoal #171916; white #FFFFFF.\nThese are proposed refinements for client review.\nLetterform outlines based on DejaVu fonts (permissive font license; original design modification), see DejaVu license.\n')
licensefile=Path('/usr/share/doc/fonts-dejavu-core/copyright')
if licensefile.exists(): (p/'FONT-LICENSE.txt').write_text(licensefile.read_text())
with zipfile.ZipFile(p/'srk-logo-assets.zip','w',zipfile.ZIP_DEFLATED) as z:
    for f in p.iterdir():
        if f.suffix!='.zip': z.write(f,f.name)
