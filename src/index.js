//import { game } from './GameState';
import Vue from './vue.esm';

//game.gameState.add(game.mainMenu);

Vue.component('game-messages', {
  props: ['message'],
  template: '<p>{{ message }}</p>'
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Is this different?'
  }
});
