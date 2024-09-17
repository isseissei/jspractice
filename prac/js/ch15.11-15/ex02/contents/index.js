//なんかおかしい
const form = document.querySelector("#new-todo-form");
const list = document.querySelector("#todo-list");
const input = document.querySelector("#new-todo");

document.addEventListener("DOMContentLoaded", async () => {
  disableInteraction(true); 

  retryWithExponentialBackoff(
    () => fetchWithTimeout('http://localhost:3000/api/tasks', { method: 'GET' }, 3000),
    1,
    (success, data) => {
      disableInteraction(false);
      if (success) {
        appendToDoItem(data.items);
      } else {
        alert('取得失敗だよ');
      }
    }
  );
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = input.value.trim();
  if (todo === "") {
    return;
  }
  input.value = "";

  disableInteraction(true); //3ばん

  retryWithExponentialBackoff(
    () => fetchWithTimeout('http://localhost:3000/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify({ name: todo })
    }, 3000),
    1,
    (success, task) => {
      disableInteraction(false); 
      if (success) {
        appendToDoItem([task]); 
      } else {
        alert('追加失敗');
      }
    }
  );
});

function appendToDoItem(tasks) {
  tasks.forEach(task => {
    const elem = document.createElement("li");
    const label = document.createElement("label");
    label.textContent = task.name;
    label.style.textDecorationLine = task.status === "completed" ? "line-through" : "none";

    const toggle = document.createElement("input");
    toggle.type = "checkbox";
    toggle.checked = task.status === "completed";

    toggle.addEventListener("change", () => {
      const newStatus = toggle.checked ? "completed" : "active";
      fetchWithTimeout(`http://localhost:3000/api/tasks/${task.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({ status: newStatus })
      }, 3000)
        .then(response => response.json())
        .then(updatedTask => {
          label.style.textDecorationLine = updatedTask.status === "completed" ? "line-through" : "none";
        })
        .catch(error => alert(error));
    });

    const destroy = document.createElement("button");
    destroy.textContent = "削除";
    destroy.addEventListener("click", () => {
      fetchWithTimeout(`http://localhost:3000/api/tasks/${task.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8'
        }
      }, 3000)
        .then(() => elem.remove())
        .catch(error => alert(error.message));
    });

    elem.appendChild(toggle);
    elem.appendChild(label);
    elem.appendChild(destroy);
    list.prepend(elem);
  });
}

function fetchWithTimeout(url, options, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('タイムアウトしました')), timeout);

    fetch(url, options)
      .then(response => {
        clearTimeout(timer);
        if (!response.ok && response.status >= 500) {
          reject(new Error('Server error'));
        } else {
          resolve(response.json());
        }
      })
      .catch(err => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

function retryWithExponentialBackoff(func, maxRetry, callback) {
  let retryCount = 0;

  const retry = () => {
    func()
      .then(data => callback(true, data))
      .catch(error => {
        if (retryCount < maxRetry) {
          retryCount++;
          setTimeout(retry, 3000);
        } else {
          callback(false, null);
        }
      });
  };
  
  retry();
}
//disableするやつ
function disableInteraction(disable) {
  form.querySelector("button").disabled = disable;
  input.disabled = disable;
  list.querySelectorAll("input, button").forEach(elem => elem.disabled = disable);
}
