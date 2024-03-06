import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className={'mt-[130px] max-sm:mt-[100px]'}>
      <SignIn />
    </div>
  )
}
