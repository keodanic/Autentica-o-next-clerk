import {UserButton} from '@clerk/nextjs'
import {auth} from '@clerk/nextjs/server'
import{redirect} from 'next/navigation'

const Dashboard = async() => {
  const {userId}= await auth();
  if(!userId){
    return redirect("/")
  }
  return ( 
    <div className='min-h-screen bg-gradient-to-b from-slate-600 to-black '>
      <header className='p-8 '>
        <div className='flex justify-end items-center'>
      <UserButton showName/>
        </div>
      </header>
      <h1 className='flex justify-center items-center'>DASHBOARD</h1>
    </div>
   );
}
 
export default Dashboard;