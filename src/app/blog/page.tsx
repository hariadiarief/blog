import BlogItems from '@/components/blog-items'

export const metadata = {
  title: 'Blog  | hariadiarief.com'
}

export default function Blog() {
  return (
    <div className='mt-4 w-full md:container md:mt-16 '>
      <BlogItems />
    </div>
  )
}
