import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alphiq Design Assets - Free Illustrator Designs & Digital Assets',
  description: 'Download high-quality, free design assets, illustrations, and digital resources for your creative projects. Modern, stylish designs for designers and creators.',
  keywords: 'free design assets, illustrations, digital downloads, vector graphics, design resources',
  authors: [{ name: 'Alphiq Design' }],
  openGraph: {
    title: 'Alphiq Design Assets',
    description: 'Free high-quality design assets and illustrations',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
