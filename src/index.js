import { Player } from './Player';
import { Enemy } from './Enemy';

const playerData = {
  name: 'Rolo',
  hp: 45,
  attack: function() {
    return `${this.name} tried to attack`;
  }
};
const enemyData = {
  name: 'Slime',
  hp: 5,
  attack: function() {
    return `${this.name} tried to attack`;
  }
};

let player = new Player(playerData);
let enemy = new Enemy(enemyData);
