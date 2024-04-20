import UTitle from '@/ui/title/title'
import Image from 'next/image'

export default function Skill() {
  return (
    <div>
      <UTitle title='Skills' className='text-2xl' />

      <div className='mt-4'>
        <img className='hidden md:block' src='https://lihaha.cloud/static/svg/skillPc.svg' alt='skill' />
        <img className='block md:hidden' src='https://lihaha.cloud/static/svg/skillWap.svg' alt='skill' />
      </div>
    </div>
  )
}
