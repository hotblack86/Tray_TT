
class Hoover {
  constructor(floorObj, startPosition){
    this.floor = floorObj;
    this.position = startPosition;
    this.dirtCleaned = 0;
  }

  move(directions) {
    directions.map(x => {
      if (x == 'N')
        this.position[1] += 1;
      else if (x == 'E')
        this.position[0] += 1;
      else if (x == 'S')
        this.position[1] -= 1;
      else
        this.position[0] -= 1;  
    })
  } 

  finalPosition() {
  return this.position
  }
}



module.exports = Hoover;