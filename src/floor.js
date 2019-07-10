
// Floor class is used to construct a floor object that takes in
// the room dimensions and location of dirt patches from the DataHandler class.
class Floor {
  constructor(dimensions, dirtPatches){
    this.dimensions = dimensions;
    this.dirtPatches = dirtPatches;
  }
}

module.exports = Floor;

