import { instanceOf } from "./index.js";

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);
function Bike (){
}
class BigCar extends Car{

} 
class Track extends BigCar{

}
const isuzu = new Track()

describe("てすと", () => {
    test("継承", () => {
        expect(instanceOf(auto, Car)).toBeTruthy();
        expect(instanceOf(auto, Bike)).toBeFalsy();
    });

    test("多重継承", () => {
        expect(instanceOf(isuzu, Car)).toBeTruthy();
    });
});
