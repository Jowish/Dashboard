import { redirect } from "next/navigation";

export default function Home() {
    redirect("/dashboard");

    return (
        <div>
            <h1>Login Page</h1>
        </div>
    );
}
