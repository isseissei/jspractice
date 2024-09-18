// Web Worker スクリプトを設定
const worker = new Worker(new URL('./server.js', import.meta.url), { type: 'module' });

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
    
    // Show the spinner while processing
    document.getElementById("spinner").style.display = 'block';

    worker.postMessage({
      type: 'applyFilter',
      imageData: imageData.data,
      width: img.width,
      height: img.height
    });

    worker.onmessage = (e) => {
      const { data } = e;
      if (data.type === 'filterResult') {
        const outputImageData = new ImageData(data.imageData, img.width, img.height);
        filteredCtx.putImageData(outputImageData, 0, 0);
        document.getElementById("spinner").style.display = 'none'; // Hide the spinner
      }
    };
  });

  reader.readAsDataURL(file);
});
