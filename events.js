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
