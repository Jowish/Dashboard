import TaskForm from "@/components/taskForm";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { db } from "@/db";
import { habits } from "@/db/schema";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function ManageHabits() {
    const session = await auth();
    if (!session) redirect("/login");
    const userId = session.user?.id as string;
    const id = Number(userId);

    const tasks = await db.select().from(habits);
    console.log(tasks);

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return (
        <div className="w-full max-w-3xl p-6">
            <div className="space-y-9">
                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Add your habits</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <TaskForm userId={userId}></TaskForm>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-6">
                    {tasks.map((task) => (
                        <Card key={task.id}>
                            <CardHeader>
                                <CardTitle>{task.title}</CardTitle>
                                <CardDescription>
                                    {task.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>
                                    Days:{" "}
                                    {days.map((day, index) => {
                                        if (task.date[index])
                                            return (
                                                <span key={index}>{day}, </span>
                                            );
                                    })}
                                </p>
                                <p>Hour: {task.hour}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
function eq(ownerId: any, userId: string): any {
    throw new Error("Function not implemented.");
}
