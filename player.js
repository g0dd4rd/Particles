var player = {
  x: 0, y: 0,
  width: 10, height: 10,
  color: 'white',
};

var semitones = [];

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
