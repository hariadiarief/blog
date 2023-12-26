import { allPosts } from 'contentlayer/generated'
import { formatDate } from 'lib/utils'
import Link from 'next/link'
import { compareDesc } from 'date-fns'

export const metadata = {
  title: 'Blog'
}

export default function Home() {
  const posts = allPosts
    .filter(post => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <div className='flex justify-center mt-16'>
      <div className='container max-w-4xl'>
        <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8'>
          <div className='flex-1 space-y-4'>
            <h1 className='inline-block font-heading text-4xl tracking-tight lg:text-5xl'>
              Blog
            </h1>
            <p className='text-xl text-muted-foreground'>
              A blog built using Contentlayer. Posts are written in MDX.
            </p>
          </div>
        </div>
        <hr className='my-8' />
        {posts?.length ? (
          <div className='grid grid-cols-2 gap-10 mt-12'>
            {posts.map(post => (
              <Link
                key={post._id}
                href={post.slug}
                className='bg-white dark:bg-gray-900 dark:border-gray-700'
              >
                <img
                  className='border border-gray-200 rounded-lg shadow'
                  src={post.image}
                  alt=''
                />

                <article className='pt-2'>
                  <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                    {post.title}
                  </h5>

                  <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
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
