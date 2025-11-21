import { signOut } from "@/auth"
import { useRouter } from "next/navigation";
 
export default function SignOutPage() {
    const router = useRouter();
  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
        <button className=" bg-amber-400 w-3xl" onClick={async () =>{
            'use server' 
            await signOut();
            router.push('/');
        }} >Sign out</button>
    </div>
  )
}