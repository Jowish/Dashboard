"use server";

import { db } from "@/db";
import { signIn, signOut } from "./auth";
import { habits, users } from "@/db/schema";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

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

export async function createHabit(data: any, userId: string) {
    const id = Number(userId);
    const habit = {
        ...data,
        ownerId: id,
    };
    try {
        await db.insert(habits).values(habit);
    } catch (error) {
        console.log(error);
    }
    revalidatePath("/manage");
    revalidatePath("/dashboard");
}
