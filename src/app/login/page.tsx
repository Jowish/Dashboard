import LoginForm from "@/components/loginForm";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();

    if (session?.user) redirect("/dashboard");

    return (
        <div className="flex flex-col w-screen items-center p-12 space-y-4">
            <h1 className="text-2xl">Please Login</h1>
            <LoginForm />
        </div>
    );
}
