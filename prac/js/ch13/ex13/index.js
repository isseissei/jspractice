import { promises as fs } from 'fs';
import path from "path"

export async function* walk(rootPath) {
    const stats = await fs.stat(rootPath);

    if (stats.isDirectory()) {
        yield { path: rootPath, isDirectory: true };

        const files = await fs.readdir(rootPath);
        for (const file of files) {
            const fullPath = path.join(rootPath, file);
            yield* walk(fullPath);
        }
    } else {
        yield { path: rootPath, isDirectory: false };
    }
}
