import { Icons } from '@/components/icons'

export default function contact() {
  return (
    <div className='container mt-16 max-w-screen-md mx-auto'>
      <h3 className='mb-8 text-2xl font-bold'>Contact Me</h3>

      <p className='mb-4'>
        If you have any question or want to collaborate you can react me out at:
      </p>

      <div className='align-center flex'>
        <Icons.mail className='mb-2' />
        <span className='mx-2'>:</span>
        <a target='_blank' rel='nofollow' href='mailto:adi.arief77@gmail.com'>
          adi.arief77@gmail.com
        </a>
      </div>
      <div className='align-center flex'>
        <Icons.twitter className='mb-2' />
        <span className='mx-2'>:</span>
        <a
          target='_blank'
          rel='nofollow'
          href='https://twitter.com/hariadiarief'
        >
          @hariadiarief
        </a>
      </div>
      <div className='align-center flex'>
        <Icons.instagram className='mb-2' />
        <span className='mx-2'>:</span>
        <a
          target='_blank'
          rel='nofollow'
          href='https://instagram.com/hariadiarief_'
        >
          @hariadiarief_
        </a>
      </div>
      <div className='align-center flex'>
        <Icons.gitHub className='mb-2' />
        <span className='mx-2'>:</span>
        <a
          target='_blank'
          rel='nofollow'
          href='https://github.com/hariadiarief'
        >
          @hariadiarief
        </a>
      </div>
      <div className='align-center flex'>
        <Icons.linkedin className='mb-2' />
        <span className='mx-2'>:</span>
        <a
          target='_blank'
          rel='nofollow'
          href='https://www.linkedin.com/in/hariadiarief/'
        >
          @hariadiarief
        </a>
      </div>
    </div>
  )
}
