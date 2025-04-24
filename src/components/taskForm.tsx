"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { z } from "zod";
import { taskSchema } from "@/lib/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function TaskForm() {
    const form = useForm<z.infer<typeof taskSchema>>({
        defaultValues: {
            title: "",
            description: "",
            hour: "",
            days: [false, false, false, false, false, false, false],
        },
    });

    return (
        <Form {...form}>
            <form
                className="space-y-4"
                onSubmit={form.handleSubmit((data) => console.log(data))}
            >
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. Walk with the dog"
                                    className="w-96"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="e.g. 30 min of walk in the park"
                                    className="w-96 h-16"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="hour"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Hour</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="e.g. 10:00"
                                    className="w-96"
                                    {...field}
                                />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-7 gap-4">
                    {days.map((day, index) => (
                        <FormField
                            key={index}
                            control={form.control}
                            name={`days.${index}`}
                            render={({ field }) => (
                                <FormItem className="flex flex-col items-center">
                                    <FormLabel>{day}</FormLabel>
                                    <FormControl>
                                        <input
                                            type="checkbox"
                                            checked={field.value}
                                            onChange={(e) => {
                                                field.onChange(
                                                    e.target.checked
                                                );
                                            }}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    ))}
                </div>
                <Button type="submit" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
}
