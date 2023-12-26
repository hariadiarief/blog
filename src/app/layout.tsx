import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { ThemeProvider } from '@/components/theme-provider'
import ThemeToggle from '@/components/theme-toggle'

import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hariadiarief',
  description: 'personal blog'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} antialiased min-h-screen bg-white dark:bg-gray-900 text-slate-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-7xl mx-auto py-10 px-4'>
            <header>
              <div className='flex items-center justify-between'>
                <nav className='mr-auto text-sm font-medium space-x-6'>
                  <Link href='/'>Home</Link>
                  <Link href='/portfolio'>Portfolio</Link>
                  <Link href='/contact'>Contact</Link>
                </nav>
                <ThemeToggle />
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
