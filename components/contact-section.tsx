import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="bg-primary py-24 md:py-32 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <p className="text-sm tracking-[0.3em] uppercase text-primary-foreground/70 mb-4">
          Get In Touch
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-8">
          {"Let's Create Something"}
          <br />
          <span className="italic">Extraordinary</span>
        </h2>
        <p className="text-primary-foreground/70 max-w-xl mx-auto mb-12 leading-relaxed">
          Ready to start design? We would love to hear about your project
          and discuss how we can bring your vision to life.
        </p>
        <a
          href="https://wa.me/6001172553067"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-primary-foreground text-primary px-8 py-4 text-sm tracking-widest uppercase hover:opacity-90 transition-opacity"
        >
          Start a Conversation
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
