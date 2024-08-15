const template = document.createElement("template");
template.innerHTML = `\
<style>
.completed {
  text-decoration: line-through;
}
  ul {
  list-style-type: none; /* リストマーカーを削除 */
  padding: 0; /* パディングを削除 */
  margin: 0; /* マージンを削除 */
}
</style>

<form id="new-todo-form">
  <input type="text" id="new-todo" placeholder="What needs to be done?" />
  <button>Add</button>
</form>
<ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.form = this.shadowRoot.querySelector("#new-todo-form");
    // TODO: 残りを実装
    this.input = this.shadowRoot.querySelector("#new-todo");
    this.todoList = this.shadowRoot.querySelector("#todo-list");

    // イベントリスナーを追加
    this.form.addEventListener("submit", this.addTodo.bind(this));
  }

  addTodo(event) {
    event.preventDefault();

    const text = this.input.value.trim();

    const li = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });

    const span = document.createElement("span");
    span.textContent = text;

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = " ❌";
    removeButton.addEventListener("click", () => {
      li.remove()
    })

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(removeButton)

    this.todoList.appendChild(li);
    this.input.value = ""; // 入力欄をクリア
  }
}

customElements.define("todo-app", TodoApp);
