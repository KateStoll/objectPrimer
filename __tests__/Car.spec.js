// __tests__/${filename}.spec.js

const Car = require('../Car.js').Car;

describe("Car / ", () => {
  test("It will respond to make", () => {
    let make =  "ford";
    let model = "mustang";
    const car = new Car(make, model);
    expect(car.make).toEqual(make);
  });
  test("It will respond to model", () => {
    let make =  "ford";
    let model = "escort";
    const car = new Car(make, model);
    expect(car.model).toEqual(model);
  });

});