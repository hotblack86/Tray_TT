describe("Floor class", function() {
  const Floor = require('../src/floor')

  const testDimensions = [5,5];
  const testDirtPatches = [[1, 0], [2, 2], [2,3]];
  const floor = new Floor(testDimensions, testDirtPatches);
  
  it("Should take floor dimensions and dirt patch locations on creation", function() {
    expect(floor.dimensions).toEqual(testDimensions);
    expect(floor.dirtPatches).toEqual(testDirtPatches);
  })
  
})