//オブジェクトのプロトタイプチェーンにconstructorがあるかをちぇっく
export function instanceOf(object, constructor) {
    let prototype = Object.getPrototypeOf(object);
    while (prototype !== null) {
        if (prototype === constructor.prototype) {
            return true;
        }
        prototype = Object.getPrototypeOf(prototype);
    }return false;
}



function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

// console.log(instanceOf(auto, Car));
// console.log(auto instanceof Car);
// console.log(auto instanceof Bike);
function Bike (){
}