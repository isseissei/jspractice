// @flow

//わからん。。。
type User = { id: number, name: string };
type Task = { title: string, completed: boolean, user: User, priority: "low" | "middle" | "high" };
type Priority = "low" | "middle" | "high";
type PriorityTask = Task & { priority: Priority };

function isUserObject(obj: mixed): boolean {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj["id"] === "number" &&
        typeof obj["name"] === "string"
    );
}



export class TaskManager {
    _tasks: Array<Task>;

    constructor() {
        this._tasks = [];
    }

    // タスクを追加
    add(task: Task): void {
        this._tasks.push(task);
    }

    completeTask(target: User | string): void {
        if (isUserObject(target)) {
            this._tasks
                .filter((t) => t.user === target)
                .forEach((t) => (t.completed = true));
        } else {
            this._tasks
                .filter((t) => t.title === target)
                .forEach((t) => (t.completed = true));
        }
    }

    getTasks(predicate?: (task: Task) => boolean): Array<Task> {
        if (predicate === undefined) {
            return this._tasks;
        } else {
            return this._tasks.filter(predicate);
        }
    }
}

export function isLowOrCompletedTask(priorityTask: PriorityTask): boolean {
    return priorityTask.priority === "low" || priorityTask.completed;
}

export function not(f: (arg: Task) => boolean): (arg: Task) => boolean {
    return (arg) => !f(arg);
}
