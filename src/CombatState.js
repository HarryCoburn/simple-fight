import { Player } from './Player';
import { Enemy } from './Enemy';

export class CombatState {
  constructor(player, enemy) {
    if (player instanceof Player === false || enemy instanceof Enemy === false) {
      throw 'Did not start combat with a player and an enemy';
    }
    this.player = player;
    this.enemy = enemy;
    this.playerWon = null;
    this.combatStarted = false;
    this.currentTurn = null;
  }

  startRound() {
    this.currentTurn = this.player;
    this.playerRound();
  }

  playerRound() {
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
