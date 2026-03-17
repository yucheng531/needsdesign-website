import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link href="/" className="relative h-10 w-32">
            {/* Replace with your logo PNG - upload to /public/images/logo.png */}
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              fill
              className="object-contain brightness-0 invert"
            />
          </Link>
          
          <div className="flex items-center gap-10">
            <Link
              href="#works"
              className="text-sm tracking-widest uppercase text-background/70 hover:text-background transition-colors"
            >
              Works
            </Link>
            <Link
              href="#about"
              className="text-sm tracking-widest uppercase text-background/70 hover:text-background transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-sm tracking-widest uppercase text-background/70 hover:text-background transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            {new Date().getFullYear()} Atelier Studio. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            Crafted with passion for exceptional design
          </p>
        </div>
      </div>
    </footer>
  )
}
