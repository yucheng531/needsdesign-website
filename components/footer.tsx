import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/50">
            {new Date().getFullYear()} Needs Design Studio. All rights reserved.
          </p>
          <p className="text-sm text-background/50">
            :)
          </p>
        </div>
      </div>
    </footer>
  )
}
