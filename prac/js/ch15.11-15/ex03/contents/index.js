const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  try {
    const data = await fetchWithTimeout('http://localhost:3001/api/tasks', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    });

    // タスク一覧をToDoリストに追加
    data.items.forEach(task => appendToDoItem(task));
  } catch (error) {
    alert(`タスク一覧の取得に失敗しました: ${error.message}`);
  }
});

form.addEventListener("submit", async (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)
  e.preventDefault();
  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  try {
    const task = await fetchWithTimeout('http://localhost:3001/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=UTF-8' },
      body: JSON.stringify({ name: todo })
    });
    appendToDoItem(task);
  } catch (error) {
    alert(`追加失敗`);
  }


});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = task.status === "completed" ? "line-through" : "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";
  toggle.addEventListener("change", async () => {
    const newStatus = toggle.checked ? "completed" : "active";
    try {
      const updatedTask = await fetchWithTimeout(`http://localhost:3001/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        body: JSON.stringify({ status: newStatus })
      });
      label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
    } catch (error) {
      alert(`タスクの更新に失敗しました: ${error.message}`);
    }
  });

  const destroy = document.createElement("button");
  destroy.textContent = "削除";
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい
  destroy.addEventListener("click", async () => {
    try {
      console.log("debug0")
      await fetchWithTimeout(`http://localhost:3001/api/tasks/${task.id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
      });
      console.log("debug1")
      elem.remove(); 
      console.log("debug2")
    } catch (error) {
      alert("削除失敗"+error);//204出すし消えてるけどなんかアラート出る？？？
    }
  });
  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}

function fetchWithTimeout(url, options = {}, timeout = 3000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error('Request timed out')); 
    }, timeout);

    fetch(url, {
      ...options,
      mode: 'cors',          
      credentials: 'include'   
    })
    .then(response => {
      clearTimeout(timer);
      if (response.ok) {
        return response.json();
      } else if (response.status >= 500) {
        throw new Error('Server error');
      } else {
        throw new Error('Unexpected error');
      }
    })
    .then(data => resolve(data))
    .catch(error => {
      clearTimeout(timer);
      reject(error);
    });
  });
}
