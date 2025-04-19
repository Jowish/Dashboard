import SignupForm from "@/components/signupForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Signup() {
    const session = await auth();

    if (session?.user) redirect("/dashboard");

    return (
        <div className="flex flex-col w-screen items-center p-12 space-y-4">
            <h1 className="text-2xl">Sign Up</h1>
            <SignupForm />
        </div>
    );
}
