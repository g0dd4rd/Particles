// not implemented as of ff 42.0 import "../tones/tones.js";

// flow:
// - goals - hit the right notes, let the player design a level
// - feedback - =- points etc.
// - no distraction - use headphones
// - just right - balance

// simplicity:
// - core - less is more
// - limited choices - 
// - intuitive - guide the player a little bit
// - player's perspective - step by step
var r = 0, g = 0, b = 0;
var background = {
  color: 'black'
};

var game = {
  state: 'start',
};
//console.log('game state should be start: '+ game.state);

var overlay = {
  counter: 1,
  title: 'GET READY',
  subtitle: 'press spacebar to play'
};

var keyboard = {};

// =========== Game ============
function updateGame() {
  if(game.state == 'over' && keyboard[32]) {
    game.state = 'start';
    background.color = 'black';
    overlay.counter = -1;
  }
}

function updateBackground() {
  //console.log('background.color: '+ background.color);
  background.color = 'black'; //"rgb("+ r-- +", "+ g-- +", "+ b-- +")";
}

