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
