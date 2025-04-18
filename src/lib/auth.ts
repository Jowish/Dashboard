import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { loginSchema } from "./zod";
import { db } from "@/db";
import { users } from "@/db/schema";
import { sql } from "drizzle-orm";
import { use } from "react";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null;

                const { username, password } = await credentials;

                const data = await db
                    .select()
                    .from(users)
                    .where(
                        sql`${users.username} = ${username} and ${users.password} = ${password}`
                    );

                if (!data || data.length === 0)
                    throw new Error("Invalid credentials");
                user = data[0];

                return {
                    id: user.id.toString(),
                    name: user.username,
                };
            },
        }),
    ],
});
