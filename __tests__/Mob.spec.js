// __tests__/${filename}.spec.js

const Mob = require('../Mob.js').Mob;

describe("Mob / ", () => {
  test("It will respond to ac", () => {
    let ac =  12;
    let hp = 15;
    const mob = new Mob(ac, hp);
    expect(mob.ac).toEqual(ac);
  });
  test("It will respond to hp", () => {
    let ac =  17;
    let hp = 31;
    const mob = new Mob(ac, hp);
    expect(mob.hp).toEqual(hp);
  });

});