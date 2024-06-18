import { promises as fs } from 'fs';
import path from "path"

export async function* walk(rootPath) {
    const stats = await fs.stat(rootPath);

    if (stats.isDirectory()) {
        // ディレクトリであれば
        yield { path: rootPath, isDirectory: true };

        // ディレクトリ内のファイルとサブディレクトリを再帰的に探索
        const files = await fs.readdir(rootPath);
        for (const file of files) {
            const fullPath = path.join(rootPath, file);
            yield* walk(fullPath); // 再帰呼び出し
        }
    } else {
        // ファイルであれば
        yield { path: rootPath, isDirectory: false };
    }
}

// // Example usage:
// const rootDirectory = '../'; // 実際のディレクトリパスに置き換える

// // 非同期ジェネレータからファイル/ディレクトリ情報を取得してコンソールに出力する例
// (async () => {
//     for await (const entry of walk(rootDirectory)) {
//         console.log(`Path: ${entry.path}, Is Directory: ${entry.isDirectory}`);
//     }
// })();