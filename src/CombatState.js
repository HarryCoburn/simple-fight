import { View } from './View';
import { Enemy } from './Enemy';
import { game } from './GameState';

export class CombatState {
  constructor(enemy) {
    if (enemy instanceof Enemy === false) {
      throw 'Did not start combat with an enemy';
    }
    this.player = game.player;
    this.enemy = enemy;
    this.playerWon = null;
    this.combatStarted = false;
    this.currentTurn = null;
  }

  render() {
    View.textBox.style.backgroundColor = 'red';
    View.textBox.insertAdjacentHTML(
      'beforeend',
      `<p>
    Enemy name: ${this.enemy.name}<br>
    Enemy HP: ${this.enemy.hp}<br>
    </p>`
    );
  }

  onEnter() {
    this.render();
    this.startRound();
  }

  onExit() {}

  startRound() {
    this.currentTurn = this.player;
    this.playerRound();
  }

  playerRound() {
    console.log('Player starts round');
    this.player.attack(this.enemy);
    if (this.enemy.hp <= 0) {
      this.playerWon = true;
      this.resolveCombat();
    } else {
      this.currentTurn = this.enemy;
      this.enemyRound();
    }
  }

  enemyRound() {
    this.enemy.attack(this.player);
    if (this.player.hp <= 0) {
      this.playerWon = false;
      this.resolveCombat();
    } else {
      console.log('Enemy finished their round');
      return;
    }
  }

  resolveCombat() {
    if (this.playerWon) {
      console.log('Player won!');
    } else {
      console.log('Player lost!');
    }
  }
}
