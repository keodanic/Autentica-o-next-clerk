import {UserButton} from '@clerk/nextjs'
import {auth} from '@clerk/nextjs/server'
import{redirect} from 'next/navigation'

const Dashboard = async() => {
  const {userId}= await auth();
  if(!userId){
    return redirect("/")
  }
  return ( 
    <div>
      <header><UserButton showName/></header>
      <h1>DASHBOARD</h1>
    </div>
   );
}
 
export default Dashboard;