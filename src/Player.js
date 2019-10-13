import { Creature } from './Creature';

export class Player extends Creature {
  constructor(obj) {
    super(obj);
    this.inventory = {};
  }
}
