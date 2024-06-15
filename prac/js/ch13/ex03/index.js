import * as fs from "node:fs";

export function Readdir(path, opt) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, opt, (err, files) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(files)
        })
    })
}

export function Stats(path, opt) {
    return new Promise((resolve, reject) => {
        fs.stat(path, opt, (err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stats)
        })
    })
}

// Readdir("../")
//     .then(files => {
//         console.log('Directory contents:', files);
//     })
//     .then(() => {
//         return new Promise(resolve => {
//             setTimeout(() => {
//                 console.log("まじやばい")
//                 resolve()
//             }, 3000)
//         })
//     })
//     .catch(err => {
//         console.error('Error reading directory:', err);
//     });

// Stats("../")
//     .then(stats => {
//         console.log(stats.size);//0
//     })
//     .catch(e => {
//         console.log(e)
//     })
