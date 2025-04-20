"use client";

import { login } from "@/lib/actions";
import { useActionState } from "react";

export default function LoginForm() {
    const [state, action] = useActionState(login, undefined);

    return (
        <form className="flex flex-col space-y-4" action={action}>
            <input
                className="bg-white text-black p-2 rounded-lg w-56"
                type="text"
                name="username"
                placeholder="Username"
            />
            {state?.errors?.username && (
                <p className="text-red-500">{state.errors.username}</p>
            )}
            <input
                className="bg-white text-black p-2 rounded-lg w-56"
                type="password"
                name="password"
                placeholder="Password"
            />
            {state?.errors?.password && (
                <p className="text-red-500">{state.errors.password}</p>
            )}
            <button className="bg-blue-700 text-white py-2 px-4 rounded-lg w-fit">
                Login
            </button>
        </form>
    );
}
