import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

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

export default function Task({ data }: { data: Task }) {
    return (
        <div className="grid gap-6">
            <Card key={data.id}>
                <CardHeader>
                    <CardTitle>
                        {data.title}{" "}
                        <span className="flex justify-end">
                            <Button>Configure</Button>
                        </span>
                    </CardTitle>
                    <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>
                        Days:{" "}
                        {days.map((day, index) => {
                            if (data.date[index])
                                return <span key={index}>{day}, </span>;
                        })}
                    </p>
                    <p>Hour: {data.hour}</p>
                </CardContent>
            </Card>
        </div>
    );
}
