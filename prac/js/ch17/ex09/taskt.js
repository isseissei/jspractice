"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskManager = void 0;
exports.isLowOrCompletedTask = isLowOrCompletedTask;
exports.not = not;
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this._tasks = [];
    }
    // タスクを追加する
    TaskManager.prototype.add = function (task) {
        this._tasks.push(task);
    };
    // タスクを完了にする
    TaskManager.prototype.completeTask = function (target) {
        if (isUserObject(target)) {
            this._tasks
                .filter(function (t) { return t.user === target; })
                .forEach(function (t) { return t.completed = true; });
        }
        else {
            this._tasks
                .filter(function (t) { return t.title === target; })
                .forEach(function (t) { return t.completed = true; });
        }
    };
    // 引数の関数にマッチするタスクを返す
    TaskManager.prototype.getTasks = function (predicate) {
        if (!predicate) {
            return this._tasks;
        }
        return this._tasks.filter(predicate);
    };
    return TaskManager;
}());
exports.TaskManager = TaskManager;
// Userオブジェクトであることを判定する
function isUserObject(obj) {
    return typeof obj === "object" && typeof obj.id === "number" && typeof obj.name === "string";
}
// priority="low"または完了済のタスクを判定する
function isLowOrCompletedTask(priorityTask) {
    return priorityTask.priority === "low" || priorityTask.completed;
}
// 判定関数の否定結果を返す関数を生成する
function not(f) {
    return function (arg) {
        return !f(arg);
    };
}
