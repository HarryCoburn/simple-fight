export class Creature {
  constructor(obj) {
    if (!obj || !obj.name || !obj.hp || !obj.attack) {
      throw 'Missing necessary parameter to make creature';
    }
    if (typeof obj.name !== 'string') {
      throw 'While creating creature, fed name that was not a string';
    }
    if (typeof obj.hp !== 'number') {
      throw 'While creating creature, fed hp that was not a number';
    }
    if (typeof obj.attack !== 'function') {
      throw 'While creating creature, fed attack function that was not a function';
    }
    this.name = obj.name;
    this.hp = obj.hp;
    this.attack = obj.attack;
  }
}
