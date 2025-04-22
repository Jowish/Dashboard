"use client";

import { login } from "@/lib/actions";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zod";
import { Button } from "./ui/button";

export default function LoginForm() {
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(data: z.infer<typeof loginSchema>) {
        await login(data);
    }

    return (
        <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>User</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Username"
                                    className="w-96"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="********"
                                    className="w-96"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit" className="w-full">
                    Login
                </Button>
            </form>
        </Form>
    );
}
