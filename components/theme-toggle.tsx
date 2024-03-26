'use client'
import { useTheme } from 'next-themes'
import { MoonIcon } from './Icons/MoonIcon'
import { SunIcon } from './Icons/SunIcon'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button
      aria-label='Toggle dark mode'
      className='group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <span className='sr-only'>Toggle mode</span>
      <SunIcon className='[@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-dark h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-primary [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50' />
      <MoonIcon className='hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-primary' />
    </button>
  )
}

export default ThemeToggle
