export class Soldier {
    constructor(atk) {
        this.atk = atk
    }
    attack() {
        return 2 * this.atk;
    }
}

export class MSoldier extends Soldier {
    constructor(atk, mgc) {
        super();
        this.atk = atk;
        this.mgc = mgc;
    }
    attack() {
        return 2 * this.atk + this.mgc;
    }
}

export function Csoldier(atk) {//戦士のコンストラクタ関数
    this.atk = atk;
}
Csoldier.prototype.attack = function () {
    return this.atk * 2;
}

export function Msoldier(atk, mgc) {
    this.atk = atk
    this.mgc = mgc
}
Msoldier.prototype = Object.create(Csoldier.prototype)
Msoldier.prototype.constructor = Msoldier;
Msoldier.prototype.attack = function () {
    return this.atk * 2 + this.mgc;
}