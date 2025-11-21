import { redirect } from "next/navigation";
import { signOut } from "@/auth";

export default function SignOutPage() {
  async function signOutAction(formData: FormData) {
    "use server";
    await signOut();
    redirect("/"); // серверний редірект
  }

  return (
    <div>
      <h5>Are you sure you want to sign out?</h5>
      <form action={signOutAction}>
        <button className="bg-amber-400 w-3xl" type="submit">
          Sign out
        </button>
      </form>
    </div>
  );
}
