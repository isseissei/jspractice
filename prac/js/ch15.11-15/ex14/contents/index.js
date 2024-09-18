"use strict";

const button = document.querySelector("#send-button");
const messageContainer = document.getElementById("message-container");
button.addEventListener("click", (e) => {
  e.preventDefault();
  getMessageFromServer();
});
async function getMessageFromServer() {
  const messageElement = document.createElement("div");
  messageElement.className = "message";
  messageElement.textContent = "";
  messageContainer.appendChild(messageElement);

  // TODO: ここにサーバーとのやり取り等を実装しなさい
  const eventSource = new EventSource("http://localhost:3000/message");

  eventSource.onmessage = function (event) {
    const data = JSON.parse(event.data);

    const newMessageElement = document.createElement("div");
    newMessageElement.className = "message";
    newMessageElement.textContent = data.value;
    messageContainer.appendChild(newMessageElement);

    
    if (data.done) {
      eventSource.close();
      button.disabled = false; 
    }
  };

  eventSource.onerror = function () {
    console.error("サーバーとの接続中にエラーが発生しました");
    eventSource.close();
    button.disabled = false; 
  };
}