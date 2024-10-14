import fs from 'fs';
import iconv from 'iconv-lite';

const readFile = (filePath) => {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      console.error('読み込み失敗', err);
      return;
    }

    const text = iconv.decode(data, 'Shift_JIS');
    //const text2 = iconv.decode(data, 'base64');

    console.log(text);
    //console.log(text2);
  });
};

readFile('./hello.txt');
