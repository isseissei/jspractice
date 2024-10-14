import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 8000;//todo: 引数で指定できるようにしたい気持ち
const rootDir = 'C:/Users/r00528334/Pjs/jspractice/prac/js/ch16/ex09/files';//todo: 引数で指定できるようにしたい気持ち
export default app;//テスト用

app.use('/test/mirror', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=UTF-8');
    res.write(`${req.method} ${req.url} HTTP/${req.httpVersion}\r\n`);

    for (const header in req.headers) {
        res.write(`${header}: ${req.headers[header]}\r\n`);
    }
    res.write('\r\n');

    req.pipe(res);
});

app.use(express.static(rootDir, {
    index: false,
    setHeaders: (res, filePath) => {
        const ext = path.extname(filePath).toLowerCase();
        switch (ext) {
            case '.html':
            case '.htm': res.setHeader('Content-Type', 'text/html'); break;
            case '.js': res.setHeader('Content-Type', 'text/javascript'); break;
            case '.css': res.setHeader('Content-Type', 'text/css'); break;
            case '.png': res.setHeader('Content-Type', 'image/png'); break;
            case '.txt': res.setHeader('Content-Type', 'text/plain'); break;
            default: res.setHeader('Content-Type', 'application/octet-stream'); break;
        }
    }
}));

// ファイルが見つからない場合
app.use((req, res) => {
    const fileName = path.resolve(rootDir, req.path.substring(1).replace(/\.\.\//g, ''));
    fs.access(fileName, fs.constants.F_OK, (err) => {
        if (err) {
            res.status(404).send('Fileなし');
        }
    });
});


app.listen(port, () => {
    console.log(`ポート:  ${port}`);
});
