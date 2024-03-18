export var Circle = {
    r: 3,
    theta: 0,

    get x() {
        return this.r * Math.cos(this.theta);
    },
    get y() {
        return this.r * Math.sin(this.theta);
    },
    set x(val) {
        if (isNaN(val)) {
            throw new Error("x is NaN");
        }
        this.r = Math.sqrt(val * val + this.y * this.y);
        this.theta = Math.atan2(this.y, val);
    },
    set y(val) {
        if (isNaN(val)) {
            throw new Error("y is NaN");
        }
        this.r = Math.sqrt(val * val + this.x * this.x);
        this.theta = Math.atan2(val, this.x);
    },
};