import SignIn from '@/layout/SignIn';

import wait from '@/utils/wait';

export default async function SignInPage() {
  await wait(5000)

  return (
    <SignIn />
  )
}