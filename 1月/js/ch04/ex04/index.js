export let bitCount = bits => {
	let y = 0;
	for (let a = bits; a !== 0; a &= a - 1) {//&じゃなくて&=なのはなぜ？
		y++;
	}
	return y;
};
//console.log(bitCount(0b0101))