document.getElementById("image").addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const img = new Image();
  const reader = new FileReader();

  reader.addEventListener("load", (e) => {
    img.src = e.target.result;
  });

  img.addEventListener("load", () => {
    const originalCanvas = document.getElementById("original");
    const filteredCanvas = document.getElementById("filtered");
    const originalCtx = originalCanvas.getContext("2d");
    const filteredCtx = filteredCanvas.getContext("2d");

    originalCanvas.width = img.width;
    originalCanvas.height = img.height;
    filteredCanvas.width = img.width;
    filteredCanvas.height = img.height;

    originalCtx.drawImage(img, 0, 0);

    const imageData = originalCtx.getImageData(0, 0, img.width, img.height);
    const data = imageData.data;

    // グレースケールへの変換 (RGB を足して平均を取っている)
    //
    // ガウシアンフィルタを実装する場合はこの周辺のコードを変更しなさい
    // imageData の中身はそのままに別の配列に結果を格納するとよい
    // ```js
    // const outputData = new Uint8ClampedArray(imageData.data.length);
    //
    // // TODO: ここで imageData.data を参照して outputData に結果を格納
    //
    // const outputImageData = new ImageData(outputData, img.width, img.height);
    // filteredCtx.putImageData(outputImageData, 0, 0);
    // ```


    let outputData = new Uint8ClampedArray(imageData.data.length);
    // for (let i = 0; i < outputData.length; i += 4) {
    //   outputData[i] = imageData.data[i];     // 赤
    //   outputData[i + 1] = imageData.data[i + 1] * 0.5; // 緑
    //   outputData[i + 2] = imageData.data[i + 2] * 0.5; // 青
    //   outputData[i + 3] = imageData.data[i + 3]; // アルファ
    // }
    outputData = gaussianFilter(imageData.data, img.width, img.height)

    const outputImageData = new ImageData(outputData, img.width, img.height);

    filteredCtx.putImageData(outputImageData, 0, 0);
  });

  reader.readAsDataURL(file);
});


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
      output[offset + 3] = array[offset + 3]; //変更なし
    }
  }

  return output;
}
