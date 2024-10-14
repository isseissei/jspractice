import fs from "fs";


export function checkEntry(path) {
    let stats
    try {
        stats = fs.statSync(path);
    } catch (e) {
        console.log(e)
        return "nofile"
    }

    if (stats.isFile()) {
        return "file"
    }
    if (stats.isDirectory()) {
        return "directory"
    }
    return "except"
}
console.log(checkEntry("やばい"))