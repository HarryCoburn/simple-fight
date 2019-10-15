import { gameState } from './GameState';

export class OptionsMenuState {
  constructor() {}

  update() {}
  render() {}
  onEnter() {
    let textBox = document.getElementById('textBox');
    textBox.style.backgroundColor = 'green';
  }
  onExit() {
    gameState.counter++;
    console.log(gameState.counter);
  }
}
