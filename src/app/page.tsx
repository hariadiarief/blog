import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='prose dark:prose-invert'>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mt-12'>
        {allPosts.map(post => (
          <article
            key={post._id}
            className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
          >
            <Link href={post.slug}>
              <img className='rounded-t-lg' src={post.imageUrl} alt='' />
            </Link>
            <div className='p-5'>
              <Link href={post.slug}>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
                  {post.title}
                </h5>
              </Link>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
                {post.description}
              </p>
              <Link
                href={post.slug}
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
