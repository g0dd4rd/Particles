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

function explode(note) {
  note.color = 'white';
}

