import BlogItems from '@/components/blog-items'
import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export const metadata = {
  title: 'hariadiarief.com'
}

export default function Home() {
  return (
    <div className='container mx-auto mt-16 max-w-screen-md'>
      <div className='flex flex-col items-center gap-4 text-center '>
        <h1 className='font-heading text-3xl font-bold sm:text-5xl md:text-6xl lg:text-3xl'>
          Hey, I'm <b>Adi</b>, a software developer who thrives on crafting
          innovative solutions with web apps.
        </h1>

        <p className='max-w-[42rem]'>
          I craft tools to enhance business growth and regularly share insights
          through articles on my blog. If you have a project in mind, feel free
          to{' '}
          <Link className='underline' href='/contact'>
            reach out and connect.
          </Link>
        </p>
      </div>

      <div className='flex flex-col items-center'>
        <div className='mt-[100px] text-2xl font-bold'>Latest articles</div>
        <BlogItems limit={3} />
        <Link
          href='/blog'
          className={cn('mt-8', buttonVariants({ variant: 'ghost' }))}
        >
          See all posts
          <Icons.moveRight className='ml-2 h-4 w-4' />
        </Link>
      </div>
    </div>
  )
}
