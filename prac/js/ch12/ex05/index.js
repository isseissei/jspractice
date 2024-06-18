import fs from "fs"

export function* readLines(filePath) {
    const size = 100;
    const buffer = Buffer.alloc(size);

    let fd;
    try {
        fd = fs.openSync(filePath, 'r');

        let read;
        let position = 0;

        while ((read = fs.readSync(fd, buffer, 0, size, position)) !== 0) {
            const chunk = buffer.toString('utf8', 0, read); 

            let startIndex = 0;
            let newIndex;

          
            while ((newIndex = chunk.indexOf('\n', startIndex)) !== -1) {
                const line = chunk.substring(startIndex, newIndex);
                yield line.trim();
                startIndex = newIndex + 1; 
            }

            buffer.fill(0);
            position += read;
        }
    } finally {
        if (fd !== undefined) {
            fs.closeSync(fd); 
        }
    }
}

// const filePath = 'textfile.txt'; 

// const iterator = readLines(filePath);
// console.log(iterator.next().value)
// console.log(iterator.next().value)
// console.log(iterator.next().value)
