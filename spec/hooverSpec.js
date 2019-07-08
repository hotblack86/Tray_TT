
describe("Hoover class", function() {
  const Hoover = require('../src/Hoover')

  const testFloor =  {
    dimensions: [5, 5],
    dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
  }
  const testStartingPosition = [1, 2];

  // const testDirectionsSmall = [ 'N', 'N', 'E' ];
  // const testEndPositionSmall = [2, 4];

  const testDirections = [ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ];
  const testEndPosition = [1, 3];

  const hoover = new Hoover(testFloor, testStartingPosition);
  
  it("Should receive Floor object and hoover starting position initially", function() {
    expect(hoover.floor).toEqual(testFloor);
    expect(hoover.position).toEqual(testStartingPosition);
    expect(hoover.dirtCleaned).toEqual(0)
  })

  it("Should move hoover using full test directions", function() {
    hoover.move(testDirections);
    expect(hoover.finalPosition()).toEqual(testEndPosition);
  })




})