import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className='flex h-full min-h-screen w-full items-center justify-center p-10'>
        <div className='flex flex-col justify-center gap-4 text-center'>
          <h1 className='text-4xl font-semibold text-gray-800'>Hello World!</h1>
          <Link href='/login' className='underline'>
            To Login
          </Link>
        </div>
      </div>
    </main>
  )
}
