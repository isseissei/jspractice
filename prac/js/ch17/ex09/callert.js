"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var taskt_1 = require("./taskt");
console.log("debug1");
var user1 = { id: 1, name: "Alice" };
var user2 = { id: 2, name: "Bob" };
var taskManager = new taskt_1.TaskManager();
taskManager.add({
    title: "テキストを読む",
    completed: false,
    user: user1,
    priority: "high",
});
taskManager.add({
    title: "質問表を書く",
    completed: false,
    user: user1,
    priority: "middle",
});
taskManager.add({
    title: "質問表を確認する",
    completed: false,
    user: user2,
    priority: "low",
});
taskManager.add({
    title: "問題を作成する",
    completed: false,
    user: user2,
    priority: "middle",
});
taskManager.completeTask(user1);
taskManager.completeTask("質問表を確認する");
console.log(taskManager.getTasks());
console.log("aaa");
console.log(taskManager.getTasks((0, taskt_1.not)(taskt_1.isLowOrCompletedTask)));
