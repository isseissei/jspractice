export function log() {
    console.log('呼び出し先');
    const messageDiv = document.createElement('div');
    messageDiv.textContent = "よびだされたよ";

    document.body.appendChild(messageDiv);
}
