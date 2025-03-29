import { redirect } from "next/navigation";
import { auth } from "./auth";
import Link from "next/link";

export default async function Home() {
const session=await auth();
if(!session){
  redirect('/api/auth/signin')
}
  return (
  <div className="max-w-xl mx-auto min-h-screen  flex flex-col items-center justify-center">
<h1 className="text-xl text-gray-100"> Welcome {session.user.name}</h1>
<div>Role: {session.user.role}</div>
<div>
  <Link href={'/api/auth/signout'} className="text-blue-600">Signout</Link>
</div>
  </div>
  );
}
