
class Hoover {
  constructor(floorObj, startPosition){
    this.floor = floorObj;
    this.position = startPosition;
    this.dirtCleaned = 0;
  }


  move(directions) {
    
    directions.map(x => {
      if (x == 'N') {
        this.position[1] += 1; }
      else if (x == 'E') {
        this.position[0] += 1; }
      else if (x == 'S') {
        this.position[1] -= 1; }
      else {
        this.position[0] -= 1; }
    this.clean();
    })
    
  }

  clean() {
    this.floor.dirtPatches.map((x, index) => {
      let spotOn = (x[0] === this.position[0] && x[1] === this.position[1]); 
      if (spotOn)
        this.floor.dirtPatches.splice(index, 1);
        if (spotOn)
          this.dirtCleaned += 1;
    })
  }

  
  finalPosition() {
  return this.position
  }
}


hoover = new Hoover({
  dimensions: [5, 5],
  dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
}, [1, 2]);

console.log(hoover.floor.dimensions);
console.log(hoover.position);
console.log(hoover.floor.dirtPatches);
console.log('\n');
hoover.move([ 'S', 'S', 'S', 'S' ])
// hoover.move([ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ]);
console.log(hoover.position);
console.log(hoover.dirtCleaned);
console.log(hoover.floor.dirtPatches);


module.exports = Hoover;