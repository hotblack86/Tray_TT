
// Hoover Class takes in as parameters a Floor object and the
// initial hoover position from the DataHandler Class.
// It returns the final hoover position and number of dirt patches cleaned.
class Hoover {
  constructor(floorObj, startPosition){
    this.floor = floorObj;
    this.position = startPosition;
    this.dirtCleaned = 0;
  }


  move(directions) {
    // Moves the hoover using the parsed input.txt directions.
    // Hoover will remain in place if given a direction moving it into a wall. 
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
    // Increments the dirtCleaned counter and removes hoovered dirt patch from array.
    this.floor.dirtPatches.map((x, index) => {
      let spotOn = (x[0] === this.position[0] && x[1] === this.position[1]); 
      if (spotOn)
        this.floor.dirtPatches.splice(index, 1);
        if (spotOn)
          this.dirtCleaned += 1;
    })
  }

  wall() {
    // Sets the walls of the room and returns true if hoover tries to move in to them.
    let northWall = (this.position[1] >= this.floor.dimensions[1]);
    let eastWall = (this.position[0] >= this.floor.dimensions[0]);
    let southWall = (this.position[1] < 0);
    let westWall = (this.position[0] < 0);

    if(northWall || eastWall || southWall || westWall) return true;
  }
}


module.exports = Hoover;