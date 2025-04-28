"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { z } from "zod";
import { taskSchema } from "@/lib/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import {createHabit, updateTask} from "@/lib/actions";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

interface Task {
    id: number;
    title: string;
    description: string;
    hour: string;
    complete: boolean | null;
    date: boolean[];
    ownerId: number | null;
}

export default function TaskForm({
    userId,
    _data,
}: {
    userId?: string;
    _data?: Task;
}) {
    const form = useForm<z.infer<typeof taskSchema>>({
        defaultValues: {
            title: "",
            description: "",
            hour: "",
            days: [false, false, false, false, false, false, false],
        },
    });

    const form2 = useForm<z.infer<typeof taskSchema>>({
        defaultValues: {
            title: _data?.title,
            description: _data?.description,
            hour: _data?.hour,
            days: _data?.date,
        },
    });

    async function onSubmit(data: z.infer<typeof taskSchema>) {
        if (!userId) {
            console.error("User ID is undefined");
            return;
        }

        await createHabit(data, userId);
    }

    async function onUpdate(data: z.infer<typeof taskSchema>) {
        await updateTask(data, _data!.id);
    }

    if (!_data) {
        return (
            <Form {...form}>
                <form
                    className="space-y-4"
                    onSubmit={form.handleSubmit(onSubmit)}
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
                                        className="w-full"
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
                                        className="w-full h-16"
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
                                        className="w-full"
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
    } else if (_data) {
        return (
            <Form {...form2}>
                <form
                    className="space-y-4"
                    onSubmit={form2.handleSubmit(onUpdate)}
                >
                    <FormField
                        control={form2.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. Walk with the dog"
                                        className="w-full"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form2.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="e.g. 30 min of walk in the park"
                                        className="w-full h-16"
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form2.control}
                        name="hour"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Hour</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="e.g. 10:00"
                                        className="w-full"
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
                                control={form2.control}
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
                        Update
                    </Button>
                </form>
            </Form>
        );
    }
}
