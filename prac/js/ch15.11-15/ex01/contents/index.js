const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  // TODO: ここで API を呼び出してタスク一覧を取得し、
  // 成功したら取得したタスクを appendToDoItem で ToDo リストの要素として追加しなさい
  //alert("てすと")
  console.log(document.cookie)
  fetch('http://localhost:3000/api/tasks', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.items);
      appendToDoItem(data.items)
    })
    .catch(error => alert(error));
});

form.addEventListener("submit", (e) => {
  // TODO: ここで form のイベントのキャンセルを実施しなさい (なぜでしょう？)→送信されるのをふせぐ
  e.preventDefault()
  // 両端からホワイトスペースを取り除いた文字列を取得する
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }

  // new-todo の中身は空にする
  input.value = "";

  // TODO: ここで API を呼び出して新しいタスクを作成し
  // 成功したら作成したタスクを appendToDoElement で ToDo リストの要素として追加しなさい
  fetch('http://localhost:3000/api/tasks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify({ name: todo })
  })
    .then(response => response.json())
    .then(task => {
      appendToDoItem(task); // 成功したら新しいタスクをリストに追加
    })
    .catch(error => alert(`タスクの追加に失敗しました: ${error.message}`));
});

// API から取得したタスクオブジェクトを受け取って、ToDo リストの要素を追加する
function appendToDoItem(task) {
  // ここから #todo-list に追加する要素を構築する
  const elem = document.createElement("li");

  const label = document.createElement("label");
  label.textContent = task.name;
  label.style.textDecorationLine = "none";

  const toggle = document.createElement("input");
  // TODO: toggle が変化 (change) した際に API を呼び出してタスクの状態を更新し
  // 成功したら label.style.textDecorationLine を変更しなさい
  toggle.type = "checkbox";
  toggle.checked = task.status === "completed";

  toggle.addEventListener("change", () => {
    const newStatus = toggle.checked ? "completed" : "active";

    fetch(`http://localhost:3000/api/tasks/${task.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ status: newStatus })
    })
      .then(response => response.json())
      .then(updatedTask => {
        label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
      })
      .catch(error => alert(error));
  });

  const destroy = document.createElement("button");
  // TODO: destroy がクリック (click) された場合に API を呼び出してタスク を削除し
  // 成功したら elem を削除しなさい

  destroy.textContent = "削除";
  destroy.addEventListener("click", () => {
    fetch(`http://localhost:3000/api/tasks/${task.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    })
      .then(() => {
        elem.remove(); // 成功したら要素を削除
      })
      .catch(error => alert(error.message));
  });

  // TODO: elem 内に toggle, label, destroy を追加しなさい
  elem.appendChild(toggle);
  elem.appendChild(label);
  elem.appendChild(destroy);
  list.prepend(elem);
}
