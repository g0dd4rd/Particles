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

var player = {
  x: 0, y: 0,
  width: 10, height: 10,
  color: 'white',
};

var keyboard = {};
var semitones = [];

// =========== Game ============
function updateGame() {
  if(game.state == 'over' && keyboard[32]) {
    game.state = 'start';
    background.color = 'black';
    overlay.counter = -1;
  }
}

var xposition = [
  {x: 90, note: 'c', color: 'red'},
  {x: 105, note: 'c#', color: 'crimson'},
  {x: 120, note: 'd', color: 'orange'},
  {x: 135, note: 'd#', color: 'gold'},
  {x: 150, note: 'e', color: 'yellow'},
  {x: 165, note: 'f', color: 'green'},
  {x: 180, note: 'f#', color: 'seagreen'},
  {x: 195, note: 'g', color: 'cyan'},
  {x: 210, note: 'g#', color: 'teal'},
  {x: 225, note: 'a', color: 'blue'},
  {x: 240, note: 'a#', color: 'mediumorchid'},
  {x: 255, note: 'b', color: 'purple'}];

var colors = ['red', 'crimson', 'orange', 'gold', 'yellow', 'green', 'seagreen', 'cyan', 'teal', 'blue', 'mediumorchid', 'purple'];

function updateBackground() {
  //console.log('background.color: '+ background.color);
  background.color = 'black'; //"rgb("+ r-- +", "+ g-- +", "+ b-- +")";
}

// ============== Notes =============
function createNotes() {
  var randomXandNote = Math.floor(Math.random() * xposition.length);
  semitones.push({
    x: Math.floor(Math.random() * 600),
    y: -10,
    width: 10,
    height: 10,
    color: xposition[randomXandNote].color,
    note: xposition[randomXandNote].note,
    onclick: checkCollisions(),
  });
}
setInterval(createNotes, 1000);

function updateNotes() {
  //create new enemies the first time through
  if(game.state == 'start' && keyboard[32]) {
    semitones = [];
    game.state = 'playing';
    //console.log('should be playing: '+ game.state);
  }

  if(game.state == 'playing') {
    //move each note down the screen
    var note;
    for(var i = 0; i < semitones.length; i++) {
      note = semitones[i];
      if(!note) continue;
      if(note) {
        note.y++;
      }
    }

    //remove the ones that are off the screen
    semitones = semitones.filter(function(note) {
      return note.y < 400;
    });
  }
}

// =========== check for collisions ===
function checkCollisions() {
  if(player.state == 'dead') return;

  var note;
  for(var i = 0; i < semitones.length; i++) {
    note = semitones[i];
    if(collided(note, player)) {
      note.color = 'white';
      note.y = 400;
      overlay.counter++;
    }
  }
}

function collided(a, b) {    
  // check for horizontal collision
  if(b.x + b.width >= a.x && b.x < a.x + a.width) {
    // check for vertical collision
    if(b.y + b.height >= a.y && b.y < a.y + a.height) {
      return true;
    }
  }
    
  // check a inside b
  if(b.x <= a.x && b.x + b.width >= a.x+a.width) {
    if(b.y <= a.y && b.y + b.height >= a.y + a.height) {
      return true;
    }
  }
    
  // check b inside a
  if(a.x <= b.x && a.x + a.width >= b.x+b.width) {
    if(a.y <= b.y && a.y + a.height >= b.y+b.height) {
      return true;
    }
  }
    
  return false;
}

// ============ Events ========================
function checkEvents() {
  attachEvent(document, 'keydown', function(e) {
    keyboard[e.keyCode] = true;
  });

  attachEvent(document, 'keyup', function(e) {
    keyboard[e.keyCode] = false;
  });

  attachEvent(document, 'mousedown', function(e) {
    console.log('mouse down event');
    player.x = e.pageX; console.log('mouse x: '+ e.pageX);
    player.y = e.pageY; console.log('mouse y: '+ e.pageY);
  });
}

function attachEvent(node, name, func) {
  if(node.addEventListener) {
    node.addEventListener(name, func, false);
  } else if(node.attachEvent) {
    node.attachEvent(name, func);
  }
}

