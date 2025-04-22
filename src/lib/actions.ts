"use server";

import { db } from "@/db";
import { signIn } from "./auth";
import { loginSchema, registerSchema } from "./zod";
import { users } from "@/db/schema";
import { redirect } from "next/navigation";
import React from "react";

interface User {
    username: string;
    password: string;
}

export async function login(data: User) {
    console.log(data);
    await signIn("credentials", data);
}

export async function register(state: any, formData: FormData) {
    const validated = registerSchema.safeParse({
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    });

    if (!validated.success) {
        return {
            errors: validated.error.flatten().fieldErrors,
        };
    }

    try {
        await db.insert(users).values(validated.data);
    } catch (error) {
        console.log(error);
    }

    redirect("/");
}
