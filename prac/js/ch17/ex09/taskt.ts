// taskt.ts
export interface User {
    id: number;
    name: string;
}

export interface PriorityTask {
    title: string;
    completed: boolean;
    user: User;
    priority: "low" | "middle" | "high";
}

export class TaskManager<T extends PriorityTask> {
    private _tasks: T[] = [];

    // タスクを追加する
    add(task: T): void {
        this._tasks.push(task);
    }

    // タスクを完了にする
    completeTask(target: User | string): void {
        if (isUserObject(target)) {
            this._tasks
                .filter(t => t.user === target)
                .forEach(t => t.completed = true);
        } else {
            this._tasks
                .filter(t => t.title === target)
                .forEach(t => t.completed = true);
        }
    }

    // 引数の関数にマッチするタスクを返す
    getTasks(predicate?: (task: T) => boolean): T[] {
        if (!predicate) {
            return this._tasks;
        }
        return this._tasks.filter(predicate);
    }
}

// Userオブジェクトであることを判定する
function isUserObject(obj: any): obj is User {
    return typeof obj === "object" && typeof obj.id === "number" && typeof obj.name === "string";
}

// priority="low"または完了済のタスクを判定する
export function isLowOrCompletedTask(priorityTask: PriorityTask): boolean {
    return priorityTask.priority === "low" || priorityTask.completed;
}

// 判定関数の否定結果を返す関数を生成する
export function not<T>(f: (arg: T) => boolean): (arg: T) => boolean {
    return function (arg: T): boolean {
        return !f(arg);
    };
}
