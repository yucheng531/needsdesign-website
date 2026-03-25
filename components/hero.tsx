import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/Enscape_2023-09-13-13-33-21.jpg"
        alt="Luxury interior design showcase"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
        <p className="text-[10px] md:text-sm tracking-[0.3em] uppercase mb-4 opacity-80">
          your life
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light text-center leading-tight text-balance max-w-4xl">
          <span className="italic">Needs Design</span>
        </h1>
        <p className="mt-8 text-sm md:text-xl font-light tracking-wide opacity-80 max-w-xl text-center text-balance">
          Interior Architecture • Spatial Branding
        </p>
      </div>

      <a
        href="#works"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white flex flex-col items-center gap-2 animate-bounce"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Explore</span>
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  )
}
