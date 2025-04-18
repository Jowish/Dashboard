"use server";

import { db } from "@/db";
import { users } from "@/db/schema";
import { registerSchema } from "@/lib/zod";
import { redirect } from "next/navigation";

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
