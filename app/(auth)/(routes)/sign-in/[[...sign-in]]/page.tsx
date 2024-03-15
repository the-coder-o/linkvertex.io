import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <head>
        <title>Sign in to your dashboard | Linkvertex</title>
      </head>
      <div className={'flex h-[100vh] items-center justify-center'}>
        <SignIn afterSignInUrl={'/dashboard'} />
      </div>
    </>
  )
}
