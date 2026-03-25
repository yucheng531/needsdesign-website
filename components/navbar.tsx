"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || menuOpen
        ? "bg-black/80 backdrop-blur-md"
        : "bg-transparent"
        }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="relative h-10 w-32 z-50">
            <Image
              src="/images/NeedsDesign LOGO.png"
              alt="Company Logo"
              fill
              className="object-contain transition-all brightness-0 invert"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            <Link
              href="#works"
              className="text-xs tracking-[0.3em] uppercase transition-colors hover:opacity-70 text-white"
            >
              Works
            </Link>
            <Link
              href="#about"
              className="text-xs tracking-[0.3em] uppercase transition-colors hover:opacity-70 text-white"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="text-xs tracking-[0.3em] uppercase transition-colors hover:opacity-70 text-white"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden z-50 text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-full h-px bg-white transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`w-full h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 transition-all duration-500 md:hidden ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col items-center justify-center h-full gap-12">
            <Link
              href="#works"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif tracking-[0.2em] uppercase text-white hover:italic transition-all"
            >
              Works
            </Link>
            <Link
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif tracking-[0.2em] uppercase text-white hover:italic transition-all"
            >
              About
            </Link>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-serif tracking-[0.2em] uppercase text-white hover:italic transition-all"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
