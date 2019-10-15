import { View } from './View';
import { game } from './GameState';

export class MainMenuState {
  constructor() {}

  update() {}
  render() {
    View.textBox.styleObject.backgroundColor = '#98FFBA';
    View.textBox.output = `
    <p>Welcome to this demo. This is the main menu.</p>
    <p>Here is the player information:</p>
    
    Name: ${game.player.name}<br>
    HP: ${game.player.hp}`;

    let startCombat = document.createElement('button');
    startCombat.textContent = 'Start Combat';
    startCombat.addEventListener('click', function() {
      game.startCombat('slime');
    });
    //View.buttonBox.appendChild(startCombat);
  }
  onEnter() {
    this.render();
  }
  onExit() {}
}
