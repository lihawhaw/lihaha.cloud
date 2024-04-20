'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Mock from 'mockjs'

export default function AllLink() {
  const pathname = usePathname()
  return (
    <div>
      <h2>Current pathname: {pathname}</h2>
      <Link href='/'>Home</Link>
      <br />
      <Link href='/post'>Post</Link>
      <br />
      <Link href={`/post/${Mock.mock('@word(5)')}`}>PostSlug</Link>
      <br />
      <Link href='/post/secret'>PostSecret</Link>
      <hr />
    </div>
  )
}
