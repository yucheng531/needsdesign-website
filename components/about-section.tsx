import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
              Design Principle
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At NeedsDesign, we focus on crafting work that genuinely improves the way people live. Whether in spatial design or brand visuals, we see design as a response—tailored, precise, and grounded in real human needs.

            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We believe good design is measured by how it enhances daily life. Aesthetics are expected; meaningful impact is the standard. If you’re looking for a practical, well-considered approach shaped around your specific needs, we invite you to get in touch.
            </p>
            <div className="flex gap-16">
              <div>
                <p className="font-serif text-4xl font-light text-foreground">5+</p>
                <p className="text-sm tracking-wide text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-foreground">4</p>
                <p className="text-sm tracking-wide text-muted-foreground mt-1">Years of Experience </p>
              </div>
            </div>
          </div>
          <div className="relative mt-12 md:mt-0">
            <div className="relative aspect-[4/5] md:aspect-[4/5] bg-muted overflow-hidden rounded-sm">
              <Image
                src="/images/image.png"
                alt="About us main image"
                fill
                className="object-cover"
              />
            </div>
            {/* Secondary image - adjusted for mobile to prevent overflow */}
            <div className="absolute -bottom-10 -left-6 md:-bottom-20 md:-left-12 w-1/2 md:w-2/3 aspect-[2.5/3] bg-primary overflow-hidden shadow-2xl border-4 border-background rounded-sm z-10">
              <Image
                src="/images/WhatsApp Image 2026-03-20 at 2.20.41 PM.jpeg"
                alt="About us secondary image"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
