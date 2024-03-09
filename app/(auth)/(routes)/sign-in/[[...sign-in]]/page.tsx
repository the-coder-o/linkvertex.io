import { SignIn } from '@clerk/nextjs'
import Animation from '@/components/animation/framer-animaion'

export default function Page() {
  return (
    <Animation delay={1} className={'mt-[110px] max-sm:mt-[100px]'}>
      <SignIn afterSignInUrl={'/dashboard'} />
    </Animation>
  )
}
