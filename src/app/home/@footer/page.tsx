'use client'
import { useEffect, useState } from 'react'

export default function HomeFooter() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)

    const resizeFn = () => {
      setWidth(window.innerWidth)
    }

    window.addEventListener('resize', resizeFn)

    return () => {
      window.removeEventListener('resize', resizeFn)
    }
  }, [])

  return (
    <>
      <footer className='text-center text-xs text-slate-600'>
        <a className='w-full' href='https://beian.mps.gov.cn/#/query/webSearch'>
          浙公网安备33011002015632号
        </a>
        &emsp;|&emsp;
        <a className='w-full' href='https://beian.miit.gov.cn/'>
          豫ICP备20003355号-2
        </a>
      </footer>
    </>
  )
}
