export function quick1(array) {
    if (array.length <= 1) {
        return array;
    }

    const cent = getRandomElement(array);
    const arrays = array.filter(y => y < cent);
    const arrayb = array.filter(y => y >= cent);

    return quick1(arrays).concat(quick1(arrayb));
}

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length); 
    return array[randomIndex];
}

export function quick(array) {
    return quick1(array);
}

//console.log(quick([2, 5, 3]));
/*
クイックソートを実装した。
時間計算量はO(nlogn)

*/