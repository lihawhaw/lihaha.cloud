import Image from 'next/image'

export default function HomeSidebar() {
  return (
    <>
      <div className='bg-black w-[180px] h-[180px] rounded-full overflow-hidden mt-10'>
        <Image src='https://static.lihaha.cn/avatar/blogger.svg' width={180} height={180} alt='avatat' />
      </div>

      <div className='blur-0 radius-lg bg-[#00000038] p-4 mt-4 mr-6 rounded-2xl'>Hangzhou</div>
    </>
  )
}
