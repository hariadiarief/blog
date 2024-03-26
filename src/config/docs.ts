import { MainNavItem } from 'types/nav'

interface DocsConfig {
  mainNav: MainNavItem[]
  // sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: 'Home',
      href: '/Home'
    },
    {
      title: 'Blog',
      href: '/blog'
    },
    {
      title: 'Contact Me',
      href: '/contact'
    }
  ]
}
