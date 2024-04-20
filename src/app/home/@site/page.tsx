import UTitle from '@/ui/title/title'

export default function Skill() {
  const siteList = [
    {
      name: '上传图片',
      url: 'https://liyizhuang.com/tool/images/upload',
      docs: '本地记录',
    },
    {
      name: '文章列表',
      url: 'https://liyizhuang.com/article/redesign-my-website',
      docs: '只是沉淀宝库',
    },
    {
      name: '作品集',
      url: 'https://liyizhuang.com/work',
      docs: '收集有趣的html作品',
    },
    {
      name: 'Kimi',
      url: 'https://kimi.moonshot.cn/',
      docs: 'kimi只能助手',
    },
  ]

  return (
    <div>
      <UTitle title='Site' className='text-2xl' />
      <div className='grid grid-cols-2 flex-row gap-4 mt-3 mb-6'>
        {siteList.map(siteItem => {
          return (
            <div className=' h-[96px] blur-0 radius-lg bg-[#00000038] rounded-xl overflow-hidden' key={siteItem.name}>
              <a className='p-4 block w-full h-full' href={siteItem.url} about={siteItem.name}>
                <h2 className='text-xl'>{siteItem.name}</h2>
                <div className='mt-2 text-zinc-400'>{siteItem.docs}</div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
