import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '_dreamLabs',
  description: 'Building the future of blockchain and public goods',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
