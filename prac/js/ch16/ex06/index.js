import fs from "fs";

fs.truncate("text.txt", 1000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log(`Success`);
    }
});

//数値のゼロではなく、バイナリの0(null)が書き込まれるのを確認