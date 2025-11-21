import { redirect } from "next/navigation";
import { signOut } from "@/auth";

export default function SignOutPage() {
  async function signOutAction() {
    "use server";
    await signOut();
    redirect("/"); 
  }

  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
        <button onClick={signOutAction} className="bg-amber-400 w-3xl" type="submit">
          Sign out
        </button>
    </div>
  );
}
