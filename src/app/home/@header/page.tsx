import Image from 'next/image'

export default function Header() {
  return (
    <header className='mb-6'>
      <div className='sm:hidden bg-black w-[180px] h-[180px] rounded-full overflow-hidden mt-14'>
        <Image src='https://static.lihaha.cn/avatar/blogger.svg' width={180} height={180} alt='avatat' />
      </div>

      <h1 className='text-5xl mt-6 sm:mt-16  font-semibold '>
        Hello I&apos;m{' '}
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 font-[fantasy]'>
          Lihaha
        </span>
      </h1>
      <div className='mt-10  text-xl'>
        <p>
          &#128102; <span className='text-[#747bff]'>Full Stack</span> Developer
        </p>
        <p>
          &#128221; The only way to do <span className='text-[#747bff]'>great</span> is to
          <span className='text-[#747bff]'> love </span>what you do.
        </p>
      </div>
    </header>
  )
}
