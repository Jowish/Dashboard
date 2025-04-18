"use server";

import { signIn } from "@/lib/auth";
import { loginSchema } from "@/lib/zod";
import React from "react";

export async function login(state: any, formData: FormData) {
    const validated = loginSchema.safeParse({
        username: formData.get("username"),
        password: formData.get("password"),
    });

    if (!validated.success) {
        return {
            errors: validated.error.flatten().fieldErrors,
        };
    }

    await signIn("credentials", validated.data);
}
