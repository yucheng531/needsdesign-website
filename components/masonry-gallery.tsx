"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// 3 portrait projects with popup galleries (5 images each)
const featuredProjects = [
  {
    id: 1,
    title: "Serene Bedroom",
    category: "Residential",
    thumbnail: "/images/project-1.jpg",
    gallery: [
      "/images/project-1.jpg",
      "/images/gallery-1-2.jpg",
      "/images/gallery-1-3.jpg",
      "/images/gallery-1-4.jpg",
      "/images/gallery-1-5.jpg",
    ],
  },
  {
    id: 2,
    title: "Penthouse Living",
    category: "Residential",
    thumbnail: "/images/project-6.jpg",
    gallery: [
      "/images/project-6.jpg",
      "/images/gallery-2-2.jpg",
      "/images/gallery-2-3.jpg",
      "/images/gallery-2-4.jpg",
      "/images/gallery-2-5.jpg",
    ],
  },
  {
    id: 3,
    title: "Dining Experience",
    category: "Commercial",
    thumbnail: "/images/project-4.jpg",
    gallery: [
      "/images/project-4.jpg",
      "/images/gallery-3-2.jpg",
      "/images/gallery-3-3.jpg",
      "/images/gallery-3-4.jpg",
      "/images/gallery-3-5.jpg",
    ],
  },
]

// 5 horizontal showcase images (no interaction)
const showcaseImages = [
  { id: 1, src: "/images/project-2.jpg", alt: "Modern Kitchen" },
  { id: 2, src: "/images/project-3.jpg", alt: "Spa Bathroom" },
  { id: 3, src: "/images/project-5.jpg", alt: "Executive Office" },
  { id: 4, src: "/images/project-7.jpg", alt: "Reading Nook" },
  { id: 5, src: "/images/project-8.jpg", alt: "Grand Entryway" },
]

export function MasonryGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean
    projectId: number | null
    currentIndex: number
  }>({
    isOpen: false,
    projectId: null,
    currentIndex: 0,
  })

  const openLightbox = (projectId: number) => {
    setLightbox({
      isOpen: true,
      projectId,
      currentIndex: 0,
    })
  }

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      projectId: null,
      currentIndex: 0,
    })
  }

  const goToPrevious = () => {
    const project = featuredProjects.find((p) => p.id === lightbox.projectId)
    if (!project) return
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === 0
          ? project.gallery.length - 1
          : prev.currentIndex - 1,
    }))
  }

  const goToNext = () => {
    const project = featuredProjects.find((p) => p.id === lightbox.projectId)
    if (!project) return
    setLightbox((prev) => ({
      ...prev,
      currentIndex:
        prev.currentIndex === project.gallery.length - 1
          ? 0
          : prev.currentIndex + 1,
    }))
  }

  const currentProject = featuredProjects.find(
    (p) => p.id === lightbox.projectId
  )

  return (
    <section id="works" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Portfolio
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light">
            Selected Works
          </h2>
        </div>

        {/* Featured Projects - 3 Portrait Cards with Interaction */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => openLightbox(project.id)}
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-black/50 transition-opacity duration-500 flex flex-col items-center justify-center ${
                    hoveredId === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-white/70 text-xs tracking-[0.2em] uppercase mb-2">
                    {project.category}
                  </p>
                  <h3 className="text-white font-serif text-2xl md:text-3xl font-light">
                    {project.title}
                  </h3>
                  <div className="mt-4 w-12 h-px bg-white/50" />
                  <p className="mt-4 text-white/60 text-xs tracking-widest uppercase">
                    Click to view gallery
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Showcase Images - 5 Horizontal Static Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {showcaseImages.map((image) => (
            <div
              key={image.id}
              className="relative overflow-hidden aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightbox.isOpen && currentProject && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Previous Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>

          {/* Image Container */}
          <div
            className="relative w-full max-w-3xl mx-16 aspect-[3/4]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentProject.gallery[lightbox.currentIndex]}
              alt={`${currentProject.title} - Image ${lightbox.currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          {/* Next Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors z-10 p-2"
          >
            <ChevronRight className="h-10 w-10" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest">
            {lightbox.currentIndex + 1} / {currentProject.gallery.length}
          </div>
        </div>
      )}
    </section>
  )
}
