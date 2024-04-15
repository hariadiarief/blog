import { Icons } from '@/components/icons'
import { formatDate } from '@/lib/utils'
import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog  | hariadiarief.com'
}

interface BlogProps {
  limit?: number
}

export default function BlogItems({ limit = null }: BlogProps) {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })
    .slice(0, limit || undefined)

  return posts?.length ? (
    <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
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

              <p className='mb-3  text-muted-foreground'>{post.description}</p>
            </article>
          </div>
        </Link>
      ))}
    </div>
  ) : (
    <p>No posts published.</p>
  )
}