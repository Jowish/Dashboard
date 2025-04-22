"use client";

import { login } from "@/lib/actions";
import React, { FormEventHandler, useActionState } from "react";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/zod";
import { Button } from "./ui/button";

interface FormElements extends HTMLFormControlsCollection {
    username: HTMLInputElement;
    password: HTMLInputElement;
}

interface UserFormElemet extends HTMLFormElement {
    readonly elements: FormElements;
}

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
                            <FormControl>
                                <Input
                                    placeholder="User"
                                    className="w-64"
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
                            <FormControl>
                                <Input
                                    type="password"
                                    placeholder="Password"
                                    className="w-64"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );

    // return (
    //     <form className="flex flex-col space-y-4" action={action}>
    //         <input
    //             className="bg-white text-black p-2 rounded-lg w-56"
    //             type="text"
    //             name="username"
    //             placeholder="Username"
    //         />
    //         {state?.errors?.username && (
    //             <p className="text-red-500">{state.errors.username}</p>
    //         )}
    //         <input
    //             className="bg-white text-black p-2 rounded-lg w-56"
    //             type="password"
    //             name="password"
    //             placeholder="Password"
    //         />
    //         {state?.errors?.password && (
    //             <p className="text-red-500">{state.errors.password}</p>
    //         )}
    //         <button className="bg-blue-700 text-white py-2 px-4 rounded-lg w-fit">
    //             Login
    //         </button>
    //     </form>
    // );
}
