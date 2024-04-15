import { SideMenuItem } from '@/components/side-menu'

interface BlogConfig {
    categories: SideMenuItem[]
}

export const blogConfig: BlogConfig = {
    categories: [
        { name: 'ALL', disabled: false },
        { name: 'Programming', disabled: false },
        { name: 'Social Politic', disabled: false },
        { name: 'Religion', disabled: false }
    ]
}
