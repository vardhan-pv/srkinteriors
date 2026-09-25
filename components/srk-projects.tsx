"use client";

import React, { useState } from "react";
import Image from "next/image";
import { SRK_PROJECTS, ProjectItem, formatWhatsAppUrl } from "@/lib/srk-data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { MessageSquare, MapPin, Eye, ArrowUpRight } from "lucide-react";

export function SRKProjects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === "all"
      ? SRK_PROJECTS
      : SRK_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Category Tabs */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-14 gap-8 border-b border-neutral-800 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C2A15B] font-semibold">
                Portfolio of Work
              </span>
              <span className="text-neutral-600">—</span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-400">
                Chintamani & Karnataka
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Selected residential & commercial work.
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              Real projects designed with durable joinery, comfortable seating layouts, and refined
              material palettes. Tap any project to view architectural specifications.
            </p>
          </div>

          {/* Filter Tabs */}
          <Tabs
            value={selectedCategory}
            onValueChange={setSelectedCategory}
            className="w-full lg:w-auto"
          >
            <TabsList className="bg-neutral-900 border border-neutral-800 p-1 rounded-none flex flex-wrap h-auto gap-1">
              <TabsTrigger
                value="all"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-none data-[state=active]:bg-[#C2A15B] data-[state=active]:text-neutral-950 text-neutral-300 font-medium"
              >
                All Projects
              </TabsTrigger>
              <TabsTrigger
                value="residential"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-none data-[state=active]:bg-[#C2A15B] data-[state=active]:text-neutral-950 text-neutral-300 font-medium"
              >
                Residential
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="text-xs uppercase tracking-wider px-4 py-2 rounded-none data-[state=active]:bg-[#C2A15B] data-[state=active]:text-neutral-950 text-neutral-300 font-medium"
              >
                Commercial
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Photography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer border border-neutral-800/80 bg-neutral-950/60 overflow-hidden hover:border-[#C2A15B]/60 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-neutral-900">
                <Image
                  src={`/${project.image}`}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />

                {/* Badges on image */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest bg-black/80 backdrop-blur-sm text-[#C2A15B] px-2.5 py-1 border border-neutral-800">
                    {project.categoryLabel}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider bg-black/80 backdrop-blur-sm text-neutral-300 px-2.5 py-1 border border-neutral-800 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C2A15B]" />
                    {project.location}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-[#C2A15B] text-neutral-950 flex items-center justify-center shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-baseline justify-between">
                  <h3 className="font-serif text-2xl text-white group-hover:text-[#C2A15B] transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-[#C2A15B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                  <span className="font-mono text-neutral-400">SCOPE:</span>
                  <span className="text-neutral-300">{project.scope}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
        <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
          <DialogContent className="max-w-4xl bg-[#0D0D0D] border-neutral-800 text-neutral-100 p-0 overflow-hidden rounded-none shadow-2xl">
            <div className="relative aspect-[16/9] w-full bg-neutral-900">
              <Image
                src={`/${activeProject.image}`}
                alt={activeProject.title}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#C2A15B] bg-black/80 px-3 py-1 border border-neutral-800">
                  {activeProject.categoryLabel} • {activeProject.location}
                </span>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-6">
              <DialogHeader className="space-y-2 text-left">
                <DialogTitle className="font-serif text-2xl sm:text-3xl text-white">
                  {activeProject.title}
                </DialogTitle>
                <DialogDescription className="text-neutral-300 text-sm leading-relaxed">
                  {activeProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-neutral-900/60 border border-neutral-800 p-4 text-xs">
                <div>
                  <div className="text-neutral-400 uppercase tracking-wider text-[10px] mb-1 font-mono">
                    Project Scope
                  </div>
                  <div className="font-medium text-white">{activeProject.scope}</div>
                </div>

                <div>
                  <div className="text-neutral-400 uppercase tracking-wider text-[10px] mb-1 font-mono">
                    Design Aesthetic
                  </div>
                  <div className="font-medium text-white">{activeProject.style}</div>
                </div>

                <div>
                  <div className="text-neutral-400 uppercase tracking-wider text-[10px] mb-1 font-mono">
                    Materials Used
                  </div>
                  <div className="font-medium text-white">{activeProject.materials}</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-neutral-800">
                <div className="text-xs text-neutral-400">
                  Interested in a similar design for your home or commercial space?
                </div>

                <a
                  href={formatWhatsAppUrl({
                    requirement: activeProject.title,
                    message: `Hello Shariq, I was viewing '${activeProject.title}' on your website and would like to discuss a similar interior design.`,
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C2A15B] hover:bg-[#b59247] text-neutral-950 font-semibold text-xs uppercase tracking-wider px-6 py-3 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Discuss on WhatsApp
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}
