"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// 3 portrait projects with popup galleries (5 images each)
const featuredProjects = [
  {
    id: 1,
    title: "Philo Chiropractic",
    category: "Commercial",
    thumbnail: "/images/DSC_9064.png",
    gallery: [
      "/images/DSC_9064.png",
      "/images/DSC_8982 v2 copy.png",
      "/images/DSC_8959 v2.png",
      "/images/DSC_9021.png",
    ],
  },
  {
    id: 2,
    title: "One 49",
    category: "Residential",
    thumbnail: "/images/IMG_7198.jpg",
    gallery: [
      "/images/IMG_7198.jpg",
      "/images/IMG_7180.jpg",
      "/images/IMG_7181.jpg",
      "/images/IMG_7206.jpg",
    ],
  },
  {
    id: 3,
    title: "New Year greeting card",
    category: "Graphic",
    thumbnail: "/images/IMG_E6525.png",
    gallery: [
      "/images/IMG_E6525.png",
      "/images/IMG_E6538.png",
      "/images/IMG_E6543.png",
      "/images/S__13533197.png",
    ],
  },
]

// 5 horizontal showcase images (no interaction)
const showcaseImages = [
  { id: 1, src: "/images/bedroom perspective overview.0000.jpg", alt: "Modern Kitchen" },
  { id: 2, src: "/images/livingroom straight.0000.jpg", alt: "Spa Bathroom" },
  { id: 3, src: "/images/Enscape_2023-09-09-16-56-59.jpg", alt: "Executive Office" },
  { id: 4, src: "/images/Enscape_2023-09-13-13-33-21.jpg", alt: "Reading Nook" },
  { id: 5, src: "/images/Enscape_2023-09-13-13-14-19.jpg", alt: "Grand Entryway" },
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
    <section id="works" className="bg-background py-24 md:py-32 scroll-mt-20">
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
                  className={`absolute inset-0 bg-black/50 transition-opacity duration-500 flex flex-col items-center justify-center ${hoveredId === project.id ? "opacity-100" : "opacity-0"
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

        {/* Showcase Images - Continuous Marquee */}
        <div className="relative overflow-hidden w-full mt-16 pb-4">
          <style dangerouslySetInnerHTML={{
            __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `}} />
          <div className="flex w-max animate-marquee gap-4 pr-4">
            {[...showcaseImages, ...showcaseImages].map((image, i) => (
              <div
                key={`${image.id}-${i}`}
                className="relative overflow-hidden w-64 md:w-80 lg:w-[280px] aspect-[4/3] flex-shrink-0"
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

          {/* Image Container with Sliding Transition */}
          <div
            className="relative w-full max-w-5xl mx-4 md:mx-16 h-[80vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${lightbox.currentIndex * 100}%)` }}
            >
              {currentProject.gallery.map((img, idx) => (
                <div key={idx} className="relative w-full h-full flex-shrink-0 flex items-center justify-center p-4">
                  <Image
                    src={img}
                    alt={`${currentProject.title} - Image ${idx + 1}`}
                    fill
                    className="object-contain"
                    priority={idx === lightbox.currentIndex}
                  />
                </div>
              ))}
            </div>
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
