import AllLink from '@/common/all-link'
import Mock from 'mockjs'

export default async function PostSlug() {
  const data = await new Promise<string>(resolve => {
    const str = `${[...Array(10)].map(() => `${Mock.mock('@cparagraph(5, 30)')}`).join('<br /><br />')}`

    setTimeout(() => {
      resolve(str)
    }, 500)
  })

  return (
    <article>
      <AllLink />
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </article>
  )
}
