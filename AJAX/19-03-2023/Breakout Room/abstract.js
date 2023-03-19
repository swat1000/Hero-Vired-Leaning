class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Cannot instantiate abstract class Shape");
        }
        this.draw = function () {
            throw new Error("Cannot call abstract method draw from Shape");
        };
    }
}
