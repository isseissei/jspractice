export class IgnoreAccentPattern {
    constructor(dia) {
        this.originalPattern = dia;
        this.normalizedPattern = this.normalizePattern(dia);
    }

    removeDia(str) {
        return str
            .normalize('NFD') // 分解
            .replace(/[\u0300-\u036f]/g, '') //除去
            .normalize('NFC'); // もう一回正規化
    }

    normalizePattern(pattern) {
        if (typeof pattern === 'string') {
            return new RegExp(this.escapeRegExp(this.removeDia(pattern)));
        } else if (pattern instanceof RegExp) {
            return new RegExp(this.removeDia(pattern.source), pattern.flags);
        } else {
            throw new Error('入力が不正');
        }
    }

    escapeRegExp(str) {
        return str.replace(/[.*+?^$|[\]\\]/g, '\\$&');
    }

    [Symbol.search](s) {
        const normalized = this.removeDia(s);
        return normalized.search(this.normalizedPattern);
    }

    [Symbol.match](s) {
        const normalized = this.removeDia(s);
        return normalized.match(this.normalizedPattern);
    }
}

// const pattern = new IgnoreAccentPattern('Café');
// console.log('Coffee Café'.search(pattern)); 
// console.log('Coffee Café'.match(pattern)); 