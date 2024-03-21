import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <head>
        <title>Get started | Linkvertex</title>
      </head>
      <div className={'flex h-[100vh] items-center justify-center'}>
        <SignUp afterSignUpUrl={'/dashboard'} />
      </div>
    </>
  )
}
