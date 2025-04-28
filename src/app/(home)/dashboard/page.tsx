import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
    const session = await auth();

    if (!session) redirect("/login");

    return (
        <div className="w-full max-w-3xl p-6">
            <div>
                <h1>Dashboard</h1>
            </div>
        </div>
    );
}
