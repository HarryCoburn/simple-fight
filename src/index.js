import { Player } from './Player';
import { Enemy } from './Enemy';
import { CombatState } from './CombatState';

const playerData = {
  name: 'Rolo',
  hp: 45,
  attack: function(enemy) {
    enemy.hp -= 5;
  }
};
const enemyData = {
  name: 'Slime',
  hp: 5,
  attack: function(player) {
    player.hp -= 5;
  }
};

let player = new Player(playerData);
let enemy = new Enemy(enemyData);
let combatState = new CombatState(player, enemy);
combatState.startRound();
