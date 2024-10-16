import { parentPort, workerData } from 'worker_threads';

const { imageData, width, height, kernel } = workerData;
const filteredData = new Uint8ClampedArray(imageData.length);

function applyGaussianFilter(x, y) {
  let r = 0, g = 0, b = 0, a = 0;

  for (let ky = -2; ky <= 2; ky++) {
    for (let kx = -2; kx <= 2; kx++) {
      const posX = Math.min(Math.max(x + kx, 0), width - 1);
      const posY = Math.min(Math.max(y + ky, 0), height - 1);
      const offset = (posY * width + posX) * 4;
      const weight = kernel[ky + 2][kx + 2];

      r += imageData[offset] * weight;
      g += imageData[offset + 1] * weight;
      b += imageData[offset + 2] * weight;
      a += imageData[offset + 3] * weight;
    }
  }

  return [r, g, b, a];
}

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const [r, g, b, a] = applyGaussianFilter(x, y);
    const offset = (y * width + x) * 4;
    filteredData[offset] = r;
    filteredData[offset + 1] = g;
    filteredData[offset + 2] = b;
    filteredData[offset + 3] = a;
  }
}

parentPort.postMessage(filteredData);
