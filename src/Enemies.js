import { Enemy } from './Enemy';

const enemyData = {
  slime: {
    name: 'Slime',
    hp: 6,
    attack: function(player) {
      player.hp -= 5;
    }
  }
};

export const Enemies = enemy => {
  return new Enemy(enemyData[enemy]);
};
