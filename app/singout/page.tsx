import { signOut } from "@/auth"
 
export default function SignOutPage() {
  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
        <button onClick={async () =>{
            'use server' 
            await signOut();
        }} >Sign out</button>
    </div>
  )
}