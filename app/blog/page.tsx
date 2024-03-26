import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import { formatDate } from 'lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Blog  | hariadiarief.com'
}

export default function Blog() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className='mt-16 flex justify-center'>
      <div className='container max-w-4xl'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='font-heading inline-block text-4xl tracking-tight lg:text-5xl'>
              Blog
            </h1>
            <p className='text-xl text-muted-foreground'>
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <hr className='my-8' />
        {posts?.length ? (
          <div className='mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map(post => (
              <Link
                key={post._id}
                href={post.slug}
                className='bg-white dark:border-gray-700 dark:bg-gray-900'
              >
                <Image
                  className='w-full rounded-lg border border-gray-200 shadow dark:border-gray-700'
                  src={post.image}
                  alt='post image'
                />

                <article className='pt-2'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {post.title}
                  </h5>

                  <p className='mb-3  text-muted-foreground'>
                    {post.description}
                  </p>

                  <p className='text-sm text-muted-foreground'>
                    {formatDate(post.date)}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </div>
  )
}
