'use client'

import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import SiteFooter from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import '@/styles/globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased dark:bg-gray-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='mx-auto flex min-h-screen flex-col'>
            <SiteHeader />
            <main className='grow flex flex-col'>{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
