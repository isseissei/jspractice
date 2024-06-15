
import * as fsPromises from "node:fs/promises";

export function FetchFirstFileSize(path) {
    return new Promise((resolve, reject) => {
        fsPromises.readdir(path)
            .then(files => {
                if (files.length === 0) {
                    reject("there is no files")
                    return
                }
                return files
            })
            .then((files) => {
                return fsPromises.stat(path + files[0])
            })
            .then(stats => {
                resolve(stats.size)
            })
            .catch(err => {
                reject(err)
            })
    })
}
export function FetchSumFileSizes(path) {
    return new Promise((resolve, reject) => {
        var total = 0
        fsPromises.readdir(path)
            .then(files => {
                if (files.length === 0) {
                    reject("there is no files")
                    return
                }
                return files
            })
            .then(files => {
                return Promise.all(//中のプロミスが全部終わるまで待ってくれる
                    files.map(file =>
                        fsPromises.stat(path + file)
                            .then(stat => stat.size)
                            .catch((e) => {
                                reject("足し算エラー")
                                throw e
                            })
                    )
                )
                    .catch(e => console.log(e))
            })
            .then((sizes) => {
                for (const size of sizes) {
                    total += size
                }
                resolve(total)
            })
            .catch(err => {
                reject(err)
            })

    })
}


// FetchFirstFileSize("./testdir/")
//     .then((size) => console.log(size))
// FetchFirstFileSize("./nildir/")
//     .then((size) => console.log(size))
//     .catch((err) => console.log(err))

// FetchSumFileSizes("./testdir/")
//     .then((size) => console.log(size))
