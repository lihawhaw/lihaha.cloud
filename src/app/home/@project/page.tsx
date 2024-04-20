import UTitle from '@/ui/title/title'

export default function Skill() {
  const projectList = [
    {
      name: '前端技术记录',
      url: 'https://liyizhuang.com/',
    },
    {
      name: '极致源于梦想',
      url: 'https://lihaha.cn/',
    },
  ]

  return (
    <div>
      <UTitle title='Project' className='text-2xl' />

      <div className='grid grid-cols-2 flex-row gap-4 mt-3 mb-6'>
        {projectList.map(siteItem => {
          return (
            <div className=' h-[80px] blur-0 radius-lg bg-[#00000038] rounded-xl overflow-hidden' key={siteItem.name}>
              <a className='p-4 block w-full h-full' href={siteItem.url} about={siteItem.name}>
                <h2>{siteItem.name}</h2>
                <div></div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}
