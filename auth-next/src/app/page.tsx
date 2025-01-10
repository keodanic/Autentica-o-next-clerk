import {auth} from '@clerk/nextjs/server'
import {SignedIn,SignInButton, UserButton, SignedOut} from '@clerk/nextjs'
import{redirect} from 'next/navigation'

export default async function Home() {
  const {userId}= await auth()
  if(userId){
    return redirect('/dashboard')
  }
  return (
   <div>
    <SignedOut>
            <SignInButton />
    </SignedOut>
    <SignedIn>
        <UserButton />
    </SignedIn>     
    <h1>OI</h1>
   </div>
  );
}
