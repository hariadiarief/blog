import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Icons } from './icons'
import { buttonVariants } from './ui/button'

export default function siteFooter() {
  return (
    <footer className='contain container h-14 md:max-w-screen-md lg:max-w-screen-lg mx-auto md:py-6 md:px-4 flex justify-between items-center flex-wrap items-center items-center justify-center gap-4 pt-20 sm:justify-between '>
      <p className='text-balance text-center text-sm leading-loose text-muted-foreground md:text-left'>
        © 2024 Masagus Hariadi Arief. All rights reserved.
      </p>

      <div className='flex'>
        <Link href={siteConfig.links.github} target='_blank' rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'w-9 px-0'
            )}
          >
            <Icons.gitHub className='h-4 w-4' />
            <span className='sr-only'>GitHub</span>
          </div>
        </Link>
        <Link href={siteConfig.links.twitter} target='_blank' rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'w-9 px-0'
            )}
          >
            <Icons.twitter className='h-3 w-3 fill-current' />
            <span className='sr-only'>Twitter</span>
          </div>
        </Link>
        <Link href={siteConfig.links.linkedin} target='_blank' rel='noreferrer'>
          <div
            className={cn(
              buttonVariants({
                variant: 'ghost'
              }),
              'w-9 px-0'
            )}
          >
            <Icons.linkedin className='h-3 w-3 fill-current' />
            <span className='sr-only'>LinkedIn</span>
          </div>
        </Link>
      </div>
    </footer>
  )
}
