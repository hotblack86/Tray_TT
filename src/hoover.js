
class Hoover {
  constructor(floorObj, startPosition){
    this.floor = floorObj;
    this.position = startPosition;
    this.dirtPatchCount = 0;
  }
}

module.exports = Hoover;