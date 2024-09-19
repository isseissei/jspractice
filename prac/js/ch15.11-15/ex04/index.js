const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

const loadTodos = () => {
  console.log("ロード")
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  console.log("読み込んだ+"+todos)
  todos.forEach(addTodo);
};
const saveTodos = () => {
  const todos = [];
  list.querySelectorAll("li").forEach((li) => {
    const label = li.querySelector("label");
    const toggle = li.querySelector("input[type='checkbox']");
    todos.push({ text: label.textContent, completed: toggle.checked });
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

// ToDoをリストに追加する関数
const addTodo = (todo) => {
  console.log("追加")
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = todo.text;
  label.style.textDecorationLine = todo.completed ? "line-through" : "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = todo.completed;
  toggle.addEventListener("change", () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    saveTodos();
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", () => {
    elem.remove();
    saveTodos();
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText === "") return;

  const newTodo = { text: todoText, completed: false };
  addTodo(newTodo);

  input.value = "";
  saveTodos();
});

document.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    list.innerHTML = ""; 
    loadTodos();         
    console.log()
  }
});

document.addEventListener("DOMContentLoaded", loadTodos);
