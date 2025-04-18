import { object, string } from "zod";

export const loginSchema = object({
    username: string({ required_error: "Username is required" }).min(
        1,
        "Username is required"
    ),
    password: string({ required_error: "Password is required" }).min(
        1,
        "Password is required"
    ),
});

export const registerSchema = object({
    username: string({ required_error: "Username is required" }).min(
        1,
        "Username is requried"
    ),
    email: string({ required_error: "Email is required" })
        .min(1, "Email is required")
        .email("Invalid email"),
    password: string({ required_error: "Password is required" })
        .min(1, "Password is required")
        .min(3, "Password must be more than 3 characters")
        .max(42, "Password must be less than 42 characters"),
});
