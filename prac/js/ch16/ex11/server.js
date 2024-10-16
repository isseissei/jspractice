//自分用めも: https://zenn.dev/wkb/books/node-tutorial/viewer/todo_02

import { createServer } from 'net';
let count = 0;
const server = createServer((socket) => {
    count++;
    console.log(`接続した: ${count}`);
    socket.on('end', () => {
        count--;
        console.log(`接続切れた: ${count}`);
    });


    socket.on('data', (data) => {
        const request = data.toString();
        const [header, ...bodyParts] = request.split('\r\n\r\n');
        const [headerLine] = header.split('\r\n');
        const [method, path] = headerLine.split(' ');

        if (method === 'GET' && path === '/') {
            const html = `<!doctype html>
                <html lang="ja">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Greeting Form</title>
                </head>
                <body>
                    <form action="/greeting" method="POST">
                    <label for="greeting">Name:</label>
                    <input type="text" id="name" name="name" />
                    <input type="text" id="greeting" name="greeting" />
                    <button type="submit">Submit</button>
                    </form>
                </body>
                </html>`;

            socket.write('HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Length: ${Buffer.byteLength(html)}\r\n\r\n');
            socket.write(html);
        } else if (method === 'POST' && path === '/greeting') {
            const body = bodyParts.join('\r\n\r\n');
            const params = new URLSearchParams(body);

            const name = params.get('name') || 'Anonymous';
            const greeting = params.get('greeting') || 'Hello';

            const responseHtml = `<!doctype html>
                <html lang="ja">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Greeting Response</title>
                </head>
                <body>
                    <p>${greeting}, ${name}</p>
                </body>
                </html>`;

            socket.write('HTTP/1.1 200 OK\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Length: ${Buffer.byteLength(responseHtml)}\r\n\r\n');
            socket.write(responseHtml);
        } else if (path === '/' || path === '/greeting') {
            socket.write('HTTP/1.1 405 Method Not Allowed\r\nAllow: GET, POST\r\nContent-Length: 0\r\n\r\n');
            console.log("405だよ")
        } else {
            // 存在しないパスの場合は 404 を返す
            socket.write('HTTP/1.1 404 Not Found\r\nContent-Length: 0\r\n\r\n');
            console.log("404だよ")
        }
        socket.end();
    });

    socket.on('error', (err) => {
        console.error(err);
    });
});

server.listen(8000, () => {
    console.log('ポート:8000');
});
