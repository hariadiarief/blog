'use client'

import { Icons } from '@/components/icons'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { blogConfig } from '@/config/blog'
import { cn, formatDate } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { Filter } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { SideMenu } from './side-menu'
import { Button } from './ui/button'

export const metadata = {
  title: 'Blog  | hariadiarief.com'
}

interface BlogProps {
  limit?: number
  showFilter?: boolean
}

export default function BlogItems({
  limit = null,
  showFilter = true
}: BlogProps) {
  const [open, setOpen] = useState(false)

  const [whichMenuActive, setWhichMenuActive] = useState('ALL')

  const posts = allPosts
    .filter(post => post.published)
    .filter(item => {
      if (whichMenuActive === 'ALL') {
        return item
      } else {
        return item.category === whichMenuActive
      }
    })
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, limit || undefined)

  return (
    <div className='flex flex-col md:flex-row'>
      {showFilter && (
        <>
          <div
            className='container sticky top-14 mb-2 flex w-full items-center
          bg-accent
           py-2 
           md:hidden
           '
          >
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant='outline' className='w-full justify-start'>
                  {!whichMenuActive || whichMenuActive === 'ALL' ? (
                    <>
                      <Filter className='mr-2' />
                      <span>Category</span>
                    </>
                  ) : (
                    <>{whichMenuActive}</>
                  )}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className='mt-4 border-t'>
                  <Command>
                    <CommandInput placeholder='Filter status...' />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {blogConfig.categories.map(menu => (
                          <CommandItem
                            key={menu.name}
                            value={menu.name}
                            onSelect={value => {
                              console.log({ value })
                              setWhichMenuActive(menu.name)
                              setOpen(false)
                            }}
                          >
                            {menu.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <SideMenu
            className='mr-8 hidden max-w-[200px] md:block'
            title='Categories'
            items={blogConfig.categories}
            activeItem={whichMenuActive}
            onClick={menu => setWhichMenuActive(menu)}
          />
        </>
      )}
      {posts?.length ? (
        <div
          className={cn(
            'grid grid-cols-1 gap-10  md:grid-cols-2 lg:grid-cols-3',
            {
              'max-sm:container': showFilter
            }
          )}
        >
          {posts.map(post => (
            <Link
              key={post._id}
              href={post.slug}
              className='bg-white dark:border-gray-700 dark:bg-gray-900'
            >
              <Image
                width={300}
                height={100}
                className='w-full rounded-lg border border-gray-200 shadow dark:border-gray-700'
                src={post.image}
                alt='post image'
              />
              <div className='px-1 '>
                <div className='mt-2 flex items-center text-xs text-muted-foreground'>
                  <Icons.calendarDays size={12} className='mr-1' />
                  <span>{formatDate(post.date)}</span>
                </div>

                <article className='pt-2'>
                  <h5 className='mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {post.title}
                  </h5>

                  <p className='mb-3  text-muted-foreground'>
                    {post.description}
                  </p>
                </article>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className='container'>
          <p>No posts published.</p>
        </div>
      )}
    </div>
  )
}
