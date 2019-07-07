describe("Data Handler class", function() {
  const DataHandler = require('../src/data_handler')
  var datahandler;

  const dataArray = ["5 5",
    "1 2",
    "1 0",
    "2 2",
    "2 3",
   "NNESEESWNWW"]


  beforeEach(function() {
    datahandler = new DataHandler();
  });

  it("Should initialise with empty data array", function() {
    expect(datahandler.datastore.length).toEqual(0);
  });

  it("Should parse text file into data array", function() {
    datahandler.parse('./input.txt')
    expect(datahandler.datastore).toEqual(dataArray);
  });

  it("Should return the room dimensions from the array as integers", function() {
    datahandler.parse('./input.txt')
    expect(datahandler.roomDimensions()).toEqual([5, 5])
  })

  it("Should return the hoover position from the array as integers", function() {
    datahandler.parse('./input.txt')
    expect(datahandler.hooverPosition()).toEqual([1, 2])
  })

  it("Should return the dirt patch positions from the array as integers", function() {
    datahandler.parse('./input.txt')
    expect(datahandler.dirtPatches()).toEqual([[1, 0], [2, 2], [2,3]])
  })

})