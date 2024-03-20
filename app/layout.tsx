'use client'

import { Popover, Transition } from '@headlessui/react'
import { Inter } from 'next/font/google'
import Link from 'next/link'

import { ThemeProvider } from '@/components/theme-provider'
import ThemeToggle from '@/components/theme-toggle'

import { Icons } from '@/components/icons'
import '@/styles/globals.css'
import { cn } from 'lib/utils'
import { usePathname } from 'next/navigation'
import React, { Fragment } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  function DesktopNavigation(props: any) {
    return (
      <nav {...props}>
        <ul className='flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10'>
          <NavItem href='/'>Home</NavItem>
          <NavItem href='/blog'>Blog</NavItem>
          <NavItem href='/projects'>Contact</NavItem>
        </ul>
      </nav>
    )
  }

  function NavItem({
    href,
    children
  }: {
    href: string
    children: React.ReactNode
  }) {
    return (
      <li>
        <Link
          href={href}
          className={cn(
            'relative block px-3 py-2 transition',
            pathname === 'href'
              ? 'text-teal-600 dark:text-teal-400'
              : 'hover:text-teal-600 dark:hover:text-teal-400'
          )}
        >
          <>
            {children}
            {pathname === 'href' && (
              <span className='absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/40 to-teal-500/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0' />
            )}
          </>
        </Link>
      </li>
    )
  }

  function MobileNavigation(props: any) {
    return (
      <Popover {...props}>
        <Popover.Button className='group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20'>
          Menu
          <Icons.chevronDown />
        </Popover.Button>
        <Transition.Root>
          <Transition.Child
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Popover.Overlay className='fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='duration-150 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-150 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <Popover.Panel
              focus
              className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800'
            >
              <div className='flex flex-row-reverse items-center justify-between'>
                <Popover.Button aria-label='Close menu' className='-m-1 p-1'>
                  <Icons.chevronUp />
                </Popover.Button>
                <h2 className='text-sm font-medium text-zinc-600 dark:text-zinc-400'>
                  Navigation
                </h2>
              </div>
              <nav className='mt-6'>
                <ul className='-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300'>
                  <MobileNavItem href='/'>Home</MobileNavItem>
                  <MobileNavItem href='/blog'>Blog</MobileNavItem>
                  <MobileNavItem href='/projects'>Contact</MobileNavItem>
                </ul>
              </nav>
            </Popover.Panel>
          </Transition.Child>
        </Transition.Root>
      </Popover>
    )

    function MobileNavItem({
      href,
      children
    }: {
      href: string
      children: React.ReactNode
    }) {
      return (
        <li>
          <Popover.Button className='block py-2'>
            <Link href={href}>{children}</Link>
          </Popover.Button>
        </li>
      )
    }
  }

  return (
    <html lang='en'>
      <body
        className={`${inter.className} min-h-screen bg-white text-slate-900 antialiased dark:bg-gray-900 dark:text-slate-50`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='mx-auto max-w-7xl px-4 py-10'>
            <header>
              <div className='flex items-center justify-between'>
                <div className='flex flex-1 justify-start md:justify-center'>
                  <MobileNavigation className='pointer-events-auto md:hidden' />
                  <DesktopNavigation className='pointer-events-auto hidden md:block' />
                </div>

                <ThemeToggle />
              </div>
            </header>
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
