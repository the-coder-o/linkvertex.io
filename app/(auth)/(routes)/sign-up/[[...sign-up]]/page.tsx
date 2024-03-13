import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <head>
        <title>Get started | Linkvertex</title>
      </head>
      <div className={'flex items-center justify-center h-[100vh]'}>
        <SignUp afterSignUpUrl={'/dashboard'} />
      </div>
    </>
  )
}
