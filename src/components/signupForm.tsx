"use client";

import { register } from "@/lib/actions";
import { useActionState } from "react";

export default function SignupForm() {
    const [state, action] = useActionState(register, undefined);

    return (
        <form className="flex flex-col space-y-4" action={action}>
            <input
                className="bg-white text-black p-2 rounded-lg w-56"
                type="text"
                name="username"
                placeholder="User"
            />
            {state?.errors?.username && (
                <p className="text-red-500">{state.errors.username}</p>
            )}
            <input
                className="bg-white text-black p-2 rounded-lg w-56"
                type="text"
                name="email"
                placeholder="Email"
            />
            {state?.errors?.email && (
                <p className="text-red-500">{state.errors.email}</p>
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
                Signup
            </button>
        </form>
    );
}
