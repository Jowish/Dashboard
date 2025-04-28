import Task from "@/components/task";
import TaskForm from "@/components/taskForm";
import { Button } from "@/components/ui/button";
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
                {tasks.map((task, index) => (
                    <Task key={index} data={task} />
                ))}
            </div>
        </div>
    );
}
function eq(ownerId: any, userId: string): any {
    throw new Error("Function not implemented.");
}
