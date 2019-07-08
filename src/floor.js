
class Floor {
  constructor(dimensions, dirtPatches){
    this.dimensions = dimensions;
    this.dirtPatches = dirtPatches;
  }
}


// floor = new Floor([5,5], [[1, 0], [2, 2], [2,3]]);
// console.log(floor.dimensions);
// console.log(floor.dirtPatches);

module.exports = Floor;

