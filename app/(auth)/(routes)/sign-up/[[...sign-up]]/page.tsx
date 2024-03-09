import { SignUp } from '@clerk/nextjs'
import Animation from '@/components/animation/framer-animaion'

export default function Page() {
  return (
    <Animation delay={1} className={'mt-[100px] max-sm:mt-[100px]'}>
      <SignUp afterSignUpUrl={'/dashboard'} />
    </Animation>
  )
}
