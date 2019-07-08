// describe("Feature: Game Run", function() {
//   const Hoover = require('../src/Hoover')

//   const testFloor =  {
//     dimensions: [5, 5],
//     dirtPatches: [ [ 1, 0 ], [ 2, 2 ], [ 2, 3 ] ] 
//   }
//   const testStartingPosition = [1, 2];
//   const hoover = new Hoover(testFloor, testStartingPosition);
  
//   it("Should output final hoover position and number of dirt patches hoovered on game completion", function() {
//     expect(hoover.finalPosition()).toEqual([1, 3]);
//     expect(hoover.dirtPatchCount).toEqual(1)
//   })
// })