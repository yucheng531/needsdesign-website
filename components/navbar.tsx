"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Navbar() {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="relative h-10 w-32">
            {/* Replace with your logo PNG - upload to /public/images/logo.png */}
            <Image
              src="/images/logo.png"
              alt="Company Logo"
              fill
              className={`object-contain transition-all ${
                scrolled ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          <div className="flex items-center gap-10">
            <Link
              href="#works"
              className={`text-sm tracking-widest uppercase transition-colors hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Works
            </Link>
            <Link
              href="#about"
              className={`text-sm tracking-widest uppercase transition-colors hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="#contact"
              className={`text-sm tracking-widest uppercase transition-colors hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
