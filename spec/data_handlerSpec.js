describe("Data Handler class", function() {
  const DataHandler = require('../src/data_handler')
  var datahandler;

  beforeEach(function() {
    datahandler = new DataHandler();
  });

  it("Should initialise with empty data array", function() {
    expect(datahandler.data.length).toEqual(0);
  });

})