onmessage = function (message) {
    const { tile } = message.data;
    const { width, height } = tile;

    const imageData = new ImageData(width, height);
    const data = imageData.data;

    function draw(x, y, size) {
        if (size < 1) return;

        const half = size / 2;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if ((i & half) && (j & half)) {
                    setPixel(x + i, y + j, 255);
                } else {
                    setPixel(x + i, y + j, 0);
                }
            }
        }

        draw(x, y, half);
        draw(x + half, y, half);
        draw(x + half / 2, y + half, half);
    }

    function setPixel(x, y, brightness) {
        const index = (x + y * width) * 4;
        data[index] = brightness;        
        data[index + 1] = brightness;    
        data[index + 2] = brightness;    
    }

    draw(0, 0, Math.min(width, height));
};
