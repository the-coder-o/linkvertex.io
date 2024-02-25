import Link from 'next/link'

export default function Home() {
  return (
    <>
      <main className={'container'}>
        <div className={'py-[12rem] flex items-center flex-col justify-center gap-[3.5rem]'}>
          <h1 className={'main-text-animation w-[410px] text-[3.80rem] text-center leading-[110%] font-[800]'}>One Place for All Your Links</h1>
          <p className={'w-[410px] font-[600] text-white leading-[1.5rem] text-center'}>One link to rule them all. Easily place your links in a beautiful single page.</p>
          <Link href={'/sign-up'} className={'px-[24px] py-[12px] rounded-[20px] font-[600] text-[18px] bg-[#FCD28D] hover:bg-[#EBB064] transition-all'}>
            Get Started
          </Link>
        </div>
      </main>
    </>
  )
}