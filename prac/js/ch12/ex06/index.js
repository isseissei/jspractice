import fs from "fs"
import path from "path"

export function* walk(rootPath) {
    const stats = fs.statSync(rootPath);

    if (stats.isDirectory()) {
        yield { path: rootPath, isDirectory: true };

        const files = fs.readdirSync(rootPath);
        for (const file of files) {
            const fullPath = path.join(rootPath, file);
            yield* walk(fullPath); 
        }
    } else {
        yield { path: rootPath, isDirectory: false };
    }
}

// const Dir = './testdir1'; 

// for (const entry of walk(Dir)) {
//     console.log(` ${entry.path}: ${entry.isDirectory}`);
// }