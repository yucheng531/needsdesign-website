import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { MasonryGallery } from "@/components/masonry-gallery"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <MasonryGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
