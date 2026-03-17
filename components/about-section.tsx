export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              About Us
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
              Design Philosophy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Atelier Studio, we believe that exceptional interior design transcends 
              mere aesthetics. It creates environments that inspire, comfort, and elevate 
              the human experience.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our approach combines timeless elegance with contemporary sensibility, 
              crafting spaces that reflect the unique character of each client while 
              maintaining an unwavering commitment to quality and refinement.
            </p>
            <div className="flex gap-16">
              <div>
                <p className="font-serif text-4xl font-light text-foreground">150+</p>
                <p className="text-sm tracking-wide text-muted-foreground mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="font-serif text-4xl font-light text-foreground">12</p>
                <p className="text-sm tracking-wide text-muted-foreground mt-1">Years of Excellence</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-muted"></div>
            <div className="absolute -bottom-8 -left-8 w-2/3 aspect-[3/2] bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
