"use server";

import { db } from "@/db";
import { signIn, signOut } from "./auth";
import { users } from "@/db/schema";
import { redirect } from "next/navigation";

interface User {
    username: string;
    password: string;
}

interface UserRegister {
    username: string;
    email: string;
    password: string;
}

export async function login(data: User) {
    console.log(data);
    await signIn("credentials", data);
    redirect("/dashboard");
}

export async function register(data: UserRegister) {
    try {
        await db.insert(users).values(data);
    } catch (error) {
        console.log(error);
    }

    const user = {
        username: data.username,
        password: data.password,
    };
    await signIn("credentials", data);
    redirect("/dashboard");
}

export async function logout() {
    await signOut({
        redirect: true,
        redirectTo: "/login",
    });
}
