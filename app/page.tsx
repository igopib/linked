import Image from 'next/image'
import { Button } from '@/components/ui/button'
import homeBg from '@/public/home.gif'

export default function Home() {
  return (
    <main
      className='relative flex min-h-screen flex-col items-center justify-center p-24'
      style={{ fontFamily: 'thug' }}
    >
      <Image
        src={homeBg}
        alt='home'
        className='absolute inset-0 object-cover h-full w-full z-[-2]'
      />
      <div className='grid gap-5 p-20 bg-background rounded-2xl border border-foreground'>
        <span className='text-4xl sm:text-8xl uppercase'>Linked</span>
        <span style={{ fontFamily: 'console' }} className='text-4xl font-bold'>
          Battle of souls
        </span>
        <Button variant={'ghost'}>Start</Button>
      </div>
    </main>
  )
}
