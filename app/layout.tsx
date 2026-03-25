import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-serif"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'Needs Design Studio',
  description: 'Crafting timeless spaces with refined elegance. High-end interior design for discerning clients.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/tab-icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/tab-icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/tab-icon.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
