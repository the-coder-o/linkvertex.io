import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <>
      <head>
        <title>Sign in to your dashboard | Linkvertex</title>
      </head>
      <div className={'flex items-center justify-center h-[100vh]'}>
        <SignIn afterSignInUrl={'/dashboard'} />
      </div>
    </>
  )
}
