import { signOut } from "@/lib/auth";

export async function GET() {
    await signOut({
        redirect: true,
        redirectTo: "/login",
    });
}
