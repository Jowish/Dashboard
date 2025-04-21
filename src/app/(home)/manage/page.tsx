import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ManageHabits() {
    const session = await auth();

    if (!session) redirect("/login");

    return (
        <div>
            <h1>Manage Habits</h1>
        </div>
    );
}
