import Footer from '@/components/ui/footer/footer'
import CountdownTimer from '@/components/soon/count-down-time'

const Page = () => {
  const launchDate = new Date('2024-07-11T00:00:00')

  return (
    <div className={'container'}>
      <div className={'flex items-center justify-center flex-col mt-[250px] gap-[15px]'}>
        <h1 className={'text-white text-6xl w-[500px] text-center font-bold leading-tight'}>This Contact page Coming Soon</h1>
        <CountdownTimer targetDate={launchDate} />
        <p className={'text-white w-[70%] text-center'}>We are excited to announce that we will be launching soon and can't wait to share our new platform with you.</p>
      </div>
      <Footer />
    </div>
  )
}

export default Page
