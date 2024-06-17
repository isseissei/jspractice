import * as fsPromises from "node:fs/promises";

export async function FetchSumFileSizes(path) {
    try {
        const files = await fsPromises.readdir(path)
        if (files.length === 0) {
            throw new Error("there is no files")
        }
        const sizes = await Promise.all(files.map(async (file) => {
            const stats = await fsPromises.stat(path +  file);
            return stats.size;
        }));
        var total = 0
        for (const size of sizes) {
            total += size
        }
        return total
    } catch (e) {
        throw new Error (e)
    }
}