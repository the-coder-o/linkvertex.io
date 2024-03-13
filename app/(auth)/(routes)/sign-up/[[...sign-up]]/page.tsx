import { SignUp } from '@clerk/nextjs'
import Animation from '@/components/animation/framer-animaion'

export default function Page() {
  return (
    <Animation delay={1} className={'flex items-center justify-center h-[100vh]'}>
      <SignUp afterSignUpUrl={'/dashboard'} />
    </Animation>
  )
}
