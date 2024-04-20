import { ReactNode } from 'react'
import RootLayout from '@/common/layout/root'

interface Props {
  children: ReactNode
  footer: ReactNode
  sidebar: ReactNode
  skill: ReactNode
  project: ReactNode
  site: ReactNode
  header: ReactNode
}

export default function HomeLayout({ sidebar, header, footer, skill, project, site }: Props) {
  return (
    <RootLayout>
      <body className='min-h-screen break-words text-base home-img1'>
        <main className='page flex min-h-screen duration-300'>
          <div className='hidden sm:block w-56'>{sidebar}</div>
          <div className='flex-1 max-w-full'>
            {header}
            {site}
            {project}
            {skill}
          </div>
        </main>
        <footer className='page py-4'>{footer}</footer>
      </body>
    </RootLayout>
  )
}
