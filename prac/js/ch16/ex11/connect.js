import { createConnection } from 'net';

const numClients = 1300;

for (let i = 0; i < numClients; i++) {
    const client = createConnection({ port: 8000 }, () => {
        console.log("client: " + i);
    });

    client.on('error', (err) => {
        console.error(i + err.message);
    });
}
