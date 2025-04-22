import LoginForm from "@/components/loginForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();

    if (session?.user) redirect("/dashboard");

    return (
        <div className="flex flex-col w-screen items-center mt-64 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>
                        Enter your username and password to access your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
                <CardFooter>
                    <p className="w-full text-center">
                        Don't have an account?{" "}
                        <Link href="/signup" className="underline">
                            Sign up
                        </Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
