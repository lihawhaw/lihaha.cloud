import { ReactNode } from 'react'
import RootLayout from '@/common/layout/root'

interface Props {
  children: ReactNode
}

export default function PostLayout(props: Props) {
  const { children } = props ?? {}
  return (
    <RootLayout>
      <body className='min-h-screen break-words text-base'>
        <main className='page flex min-h-screen'>
          <div className='flex-1 max-w-full'>{children}</div>
        </main>
      </body>
    </RootLayout>
  )
}
