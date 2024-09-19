const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

let db;

const openDB = () => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("todoDB", 1);

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };

    request.onsuccess = (event) => {
      db = event.target.result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      db = event.target.result;
      const objectStore = db.createObjectStore("todos", { keyPath: "id", autoIncrement: true });
      objectStore.createIndex("text", "text", { unique: false });
    };
  });
};

const saveDB = (todo) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["todos"], "readwrite");
    const objectStore = transaction.objectStore("todos");
    const request = objectStore.add(todo);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
};

const getTodo = () => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["todos"], "readonly");
    const objectStore = transaction.objectStore("todos");
    const request = objectStore.getAll();

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
};

const deleteTodo = (id) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(["todos"], "readwrite");
    const objectStore = transaction.objectStore("todos");
    const request = objectStore.delete(id);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.errorCode);
    };
  });
};

const addTodo = (todo) => {
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = todo.text;
  label.style.textDecorationLine = todo.completed ? "line-through" : "none";

  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = todo.completed;
  toggle.addEventListener("change", async () => {
    label.style.textDecorationLine = toggle.checked ? "line-through" : "none";
    todo.completed = toggle.checked;
    await saveDB(todo);
  });

  const destroy = document.createElement("button");
  destroy.textContent = "❌";
  destroy.addEventListener("click", async () => {
    elem.remove();
    await deleteTodo(todo.id);
  });

  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
};

const loadTodos = async () => {
  const todos = await getTodo();
  todos.forEach(addTodo);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText === "") return;

  const newTodo = { text: todoText, completed: false };
  await saveDB(newTodo);

  addTodo(newTodo);
  input.value = "";
});

window.addEventListener("DOMContentLoaded", async () => {
  await openDB();
  loadTodos();
});


window.addEventListener("storage", () => {
  list.innerHTML = "";
  loadTodos();
});
