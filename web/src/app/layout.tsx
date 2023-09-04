import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import {Providers} from "@/app/providers";
import Header from '@/sections/header/Header'
import { metadata_config } from '@/config/metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = metadata_config

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header/>
          {children}
        </Providers>
      </body>
    </html>
  )
}
