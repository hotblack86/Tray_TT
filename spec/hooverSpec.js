
describe("Hoover class", function() {
  const Hoover = require('../src/Hoover')

  const testFloor =  {
    dimensions: [5, 5],
    dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
  }
  const testStartingPosition = [1, 2];
  const hoover = new Hoover(testFloor, testStartingPosition);
  
  it("Should receive Floor object and hoover starting position initially", function() {
    expect(hoover.floor).toEqual(testFloor);
    expect(hoover.position).toEqual(testStartingPosition);
    expect(hoover.dirtPatchCount).toEqual(0)
  })
})