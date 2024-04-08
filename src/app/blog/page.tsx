import BlogItems from '@/components/blog-items'

export const metadata = {
  title: 'Blog  | hariadiarief.com'
}

export default function Blog() {
  return (
    <div className='container mx-auto mt-16 max-w-screen-md'>
      <h5 className='mb-2 flex flex-col font-bold text-gray-900 dark:text-white md:items-center'>
        <p className='text-left text-xl italic md:text-center md:text-2xl'>
          &quot;Wisdom begins in wonder&quot;
        </p>
        <p className='text-left text-lg md:text-right md:text-xl'>-Socrates-</p>
      </h5>
      <hr className='my-8' />
      <BlogItems />
    </div>
  )
}
