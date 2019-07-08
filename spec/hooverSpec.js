
describe("Hoover class", function() {
  const Hoover = require('../src/Hoover')

  const testFloor =  {
    dimensions: [5, 5],
    dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
  }
  const testStartingPosition = [1, 2];

  const testDirectionsSmall = [ 'N', 'N', 'E' ];
  const testEndPositionSmall = [2, 4];

  const testDirectionsFull = [ 'N', 'N', 'E', 'S', 'E', 'E', 'S', 'W', 'N', 'W', 'W' ];
  const hoover = new Hoover(testFloor, testStartingPosition);
  
  it("Should receive Floor object and hoover starting position initially", function() {
    expect(hoover.floor).toEqual(testFloor);
    expect(hoover.position).toEqual(testStartingPosition);
    expect(hoover.dirtCleaned).toEqual(0)
  })

  it("Should move hoover north by 2, east by 1", function() {
    hoover.move(testDirectionsSmall);
    expect(hoover.position).toEqual(testEndPositionSmall);
  })




})