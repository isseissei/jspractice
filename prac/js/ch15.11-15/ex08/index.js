import WebSocket from "ws"

function sendRequest(requestBody) {
    return new Promise((resolve, reject) => {
        const ws = new WebSocket('ws://localhost:3003');
        const timeout = 5000; 
        let isResolved = false;

        ws.onopen = () => {
            ws.send(requestBody);
        };

        ws.onmessage = (event) => {
            if (!isResolved) {
                resolve(event.data);
                isResolved = true;
                ws.close();
            }
        };

        ws.onclose = () => {
            if (!isResolved) {
                reject(new Error("WebSocket connection closed before receiving response"));
                isResolved = true;
            }
        };

        ws.onerror = (error) => {
            if (!isResolved) {
                reject(new Error("WebSocket error: " + error.message));
                isResolved = true;
                ws.close();
            }
        };

        setTimeout(() => {
            if (!isResolved) {
                reject(new Error("Request timed out"));
                isResolved = true;
                ws.close();
            }
        }, timeout);
    });
}
//どうかく
sendRequest("あああああ")
    .then((response) => {
        console.log(response); 
    })
    .catch((error) => {
        console.error(error);
    });
