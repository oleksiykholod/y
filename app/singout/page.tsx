import { signOut } from "@/auth"
 
export default function SignOutPage() {
  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
        <button className=" bg-amber-400 w-3xl" onClick={async () =>{
            'use server' 
            await signOut();
        }} >Sign out</button>
    </div>
  )
}