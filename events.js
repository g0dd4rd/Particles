// ============ Events ========================
function checkEvents() {
  attachEvent(document, 'keydown', e => {
    keyboard[e.keyCode] = true;
  });

  attachEvent(document, 'keyup', e => {
    keyboard[e.keyCode] = false;
  });

  attachEvent(document, 'mousedown', e => {
    console.log('mouse down event');
    player.x = e.pageX; console.log('mouse x: '+ e.pageX);
    player.y = e.pageY; console.log('mouse y: '+ e.pageY);
  });

  attachEvent(document, 'mousemove', e => {
    console.log('mouse x: '+ e.pageX);
    console.log('mouse y: '+ e.pageY);
  });
}

function attachEvent(node, name, func) {
  if(node.addEventListener) {
    node.addEventListener(name, func, false);
  } else if(node.attachEvent) {
    node.attachEvent(name, func);
  }
}
