function gaussianFilter(array, width, height) {
    const kernel = [
      [0.0024, 0.0147, 0.0388, 0.0147, 0.0024],
      [0.0147, 0.0926, 0.2420, 0.0926, 0.0147],
      [0.0388, 0.2420, 0.6591, 0.2420, 0.0388],
      [0.0147, 0.0926, 0.2420, 0.0926, 0.0147],
      [0.0024, 0.0147, 0.0388, 0.0147, 0.0024]
    ];
  
    const size = kernel.length;
    const half = Math.floor(size / 2);
    const output = new Uint8ClampedArray(array.length);
  
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        let r = 0, g = 0, b = 0;
  
        for (let ky = 0; ky < size; ky++) {
          for (let kx = 0; kx < size; kx++) {
            const px = x + kx - half;
            const py = y + ky - half;
  
            if (px >= 0 && px < width && py >= 0 && py < height) {
              const offset = (py * width + px) * 4;
              const weight = kernel[ky][kx];
  
              r += array[offset] * weight;
              g += array[offset + 1] * weight;
              b += array[offset + 2] * weight;
            }
          }
        }
  
        const offset = (y * width + x) * 4;
        output[offset] = Math.min(255, Math.max(0, Math.round(r)));
        output[offset + 1] = Math.min(255, Math.max(0, Math.round(g)));
        output[offset + 2] = Math.min(255, Math.max(0, Math.round(b)));
        output[offset + 3] = array[offset + 3]; 
      }
    }
  
    return output;
  }
  
  self.onmessage = (e) => {
    const { type, imageData, width, height } = e.data;
  
    if (type === 'applyFilter') {
      const filteredData = gaussianFilter(imageData, width, height);
      self.postMessage({ type: 'filterResult', imageData: filteredData });
    }
  };
  