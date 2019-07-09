
class Hoover {
  constructor(floorObj, startPosition){
    this.floor = floorObj;
    this.position = startPosition;
    this.dirtCleaned = 0;
  }


  move(directions) { 
    directions.map(x => {
      if (x == 'N') {
        this.position[1] += 1;
        if(this.wall())  
          this.position[1] -= 1;
      }
      else if (x == 'E') {
        this.position[0] += 1; 
        if(this.wall())
        this.position[0] -= 1;
      }
      else if (x == 'S') {
        this.position[1] -= 1; 
        if(this.wall()) 
          this.position[1] += 1;
      }
      else if (x == 'W') {
        this.position[0] -= 1;
        if(this.wall())  
          this.position[0] += 1;
      }
      else {
        throw new Error("Invalid Coordinate")
      }  
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

  wall() {
    let northWall = (this.position[1] >= this.floor.dimensions[1]);
    let eastWall = (this.position[0] >= this.floor.dimensions[0]);
    let southWall = (this.position[1] < 0);
    let westWall = (this.position[0] < 0);

    if(northWall || eastWall || southWall || westWall) return true;
  }

  
  finalPosition() {
    var results = [this.position[0], this.position[1], this.dirtCleaned]
    return results.join(' ')
  }
}


module.exports = Hoover;