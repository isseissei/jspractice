export function sortJapanese(strings) {
    return strings.sort((a, b) => {
        // 大文字・小文字
        const lowerA = a.toLowerCase();
        const lowerB = b.toLowerCase();

        // 濁点
        const normalizedA = lowerA.normalize('NFD').replace(/[\u3099-\u309C]/g, '');
        const normalizedB = lowerB.normalize('NFD').replace(/[\u3099-\u309C]/g, '');
        if (normalizedA < normalizedB) return -1;
        if (normalizedA > normalizedB) return 1;
        return 0;
    });
}

export function toJapaneseDateString(date) {
    const eras = [
        { name: "令和", start: new Date("2019-05-01") },
        { name: "平成", start: new Date("1989-01-08") },
        { name: "昭和", start: new Date("1926-12-25") }
    ];

    for (const era of eras) {
        if (date >= era.start) {
            const year = date.getFullYear() - era.start.getFullYear() + 1;
            const month = date.getMonth() + 1;
            const day = date.getDate();
            return `${era.name}${year}年${month}月${day}日`;
        }
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}
