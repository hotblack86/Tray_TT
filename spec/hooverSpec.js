const Hoover = require('../src/Hoover')

describe("Hoover class constructor", function() {

  const testFloor =  {
    dimensions: [5, 5],
    dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
  }
  const testStartingPosition = [1, 2];

  const hoover = new Hoover(testFloor, testStartingPosition);
  
  it("Should receive Floor object and hoover starting position initially", function() {
    expect(hoover.floor).toEqual(testFloor);
    expect(hoover.position).toEqual(testStartingPosition);
    expect(hoover.dirtCleaned).toEqual(0)
  })
})


describe("#move", function() {

  const testDirections = [ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ];
  const testEndPosition = [1, 3];

  it("Should move hoover using full test directions and return final position", function() {
    hoover.move(testDirections);
    expect(hoover.position).toEqual(testEndPosition);
  })

  it("Should remove cleaned dirt patches from floor and return number of dirt patches cleaned", function() {
    hoover.move(testDirections);
    expect(hoover.dirtCleaned).toEqual(1);
  })

})