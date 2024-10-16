import { Worker } from 'worker_threads';
import { createCanvas, loadImage } from 'canvas';
import fs from 'fs';


const gaussianKernel = [
    [1, 4, 6, 4, 1],
    [4, 16, 24, 16, 4],
    [6, 24, 36, 24, 6],
    [1, 4, 6, 4, 1],
    [4, 16, 24, 16, 4],
];

// let min = Math.min(...gaussianKernel.flat());
// let max = Math.max(...gaussianKernel.flat());

const sum = gaussianKernel.flat().reduce((acc, val) => acc + val, 0);
const normalizedKernel = gaussianKernel.map(row => row.map(value => value / sum));

async function GaussianFilter(input, output) {
    const image = await loadImage(input);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, image.width, image.height);
    //console.log(imageData)


    const worker = new Worker('./worker.js', {
        workerData: { imageData: imageData.data, width: image.width, height: image.height, kernel: normalizedKernel }
    });

    worker.on('message', (filteredData) => {
        const filteredImageData = ctx.createImageData(image.width, image.height);
        filteredImageData.data.set(filteredData);
        ctx.putImageData(filteredImageData, 0, 0);

        const out = fs.createWriteStream(output);
        const stream = canvas.createPNGStream();//ここ
        stream.pipe(out);
    });

    worker.on('error', (error) => {
        console.error(error);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(code);
        }
    });
}

GaussianFilter('input.png', 'output.png');
