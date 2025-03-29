import { redirect } from 'next/navigation';
import React from 'react'
import { auth } from '../auth';

const SettingPage = async() => {
  const session=await auth();
  if(!session)
    redirect("/api/auth/signin")
  return (
    <div className='min-h-screen flex items-center justify-center'>
     {
      session.user.role=="admin"?(<p>Authorizes User</p>):(<p>You are not authorized to view this page.</p>)
     }
      
    </div>
  )
}

export default SettingPage
