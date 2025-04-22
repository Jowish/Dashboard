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
}

export async function register(data: UserRegister) {
    try {
        await db.insert(users).values(data);
        redirect("/dashboard");
    } catch (error) {
        console.log(error);
    }
}

export async function logout() {
    await signOut();
    redirect("/login");
}
