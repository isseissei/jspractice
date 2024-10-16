import { Worker, isMainThread, parentPort } from 'worker_threads';

if (isMainThread) {
    let num = 0;
    const worker = new Worker(new URL(import.meta.url));

    worker.on('online', () => {
        for (let i = 0; i < 10000000; i++) {
            num++;
        }
    });

    worker.on('message', (message) => {
        if (message === 'num をインクリメントせよ') {
            num++;
        } else if (message === 'done') {
            console.log(num);
        }
    });


} else {
    for (let i = 0; i < 10000000; i++) {
        parentPort.postMessage('num をインクリメントせよ');
    }


    parentPort.postMessage('done');
}
