import LoginForm from "@/components/loginForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();

    if (session?.user) redirect("/dashboard");

    return (
        <div className="flex flex-col w-screen items-center mt-64 space-y-4">
            <Card>
                <CardHeader>
                    <CardTitle>Please Login</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    );
}
