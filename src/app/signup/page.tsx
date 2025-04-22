import SignupForm from "@/components/signupForm";
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

export default async function Signup() {
    const session = await auth();

    if (session?.user) redirect("/dashboard");

    return (
        <div className="flex flex-col w-screen items-center mt-64 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Sign up</CardTitle>
                    <CardDescription>
                        Register and login with and user, email and password
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <SignupForm />
                </CardContent>
                <CardFooter>
                    <p className="w-full text-center">
                        Already have an account?{" "}
                        <Link href="/login">Login</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}
