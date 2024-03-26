'use client'

import { Inter } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'

import { NavigationMenuCustom } from '@/components/NavigationMenu'
import { Icons } from '@/components/icons'
import '@/styles/globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased dark:bg-gray-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='mx-auto max-w-7xl px-4 py-10'>
            <NavigationMenuCustom />
            <main>{children}</main>
            <footer className='contain flex flex-wrap items-center justify-center gap-4 pt-20 sm:justify-between'>
              <div>Hak Cipta 2023 © hariadiarief.com</div>
              <div className='flex'>
                <a
                  href='https://twitter.com/hariadiarief'
                  rel='nofollow noreferrer'
                  target='_blank'
                >
                  <Icons.twitter className='mr-2 h-5 w-5' />
                </a>

                <a
                  href='https://github.com/hariadiarief'
                  rel='nofollow noreferrer'
                  target='_blank'
                >
                  <Icons.gitHub className='mr-2 h-5 w-5' />
                </a>
                <a
                  href='https://www.linkedin.com/in/hariadiarief/'
                  rel='nofollow noreferrer'
                  target='_blank'
                >
                  <Icons.linkedin className='mr-2 h-5 w-5' />
                </a>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
