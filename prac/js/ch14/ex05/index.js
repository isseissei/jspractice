export function typeTag(strings, ...values) {
    const result = [];

    for (let i = 0; i < strings.length; i++) {
        result.push(strings[i]);
        if (i < values.length) {
            result.push(typeof values[i]);
        }
    }

    return result.join('');
}
