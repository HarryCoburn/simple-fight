import { Player } from './Player';
import { Enemies } from './Enemies';
import { StateMachine } from './StateMachine';
import { MainMenuState } from './MainMenuState';
import { CombatState } from './CombatState';

const playerData = {
  name: 'Rolo',
  hp: 45,
  attack: function(enemy) {
    enemy.hp -= 5;
  }
};

class GameState {
  constructor() {
    this.player = new Player(playerData);
    this.enemy = null;
    this.gameState = new StateMachine();
    this.mainMenu = new MainMenuState();
  }

  startCombat(enemy) {
    let newEnemy = Enemies(enemy);
    let newState = new CombatState(newEnemy);
    this.gameState.add(newState);
  }
}

let game = new GameState();

export { game };
