const fs = require('fs');

// Datahandler Class is used to parse the input.txt file and return usable data from it
class DataHandler {
  constructor(){
    this.datastore = [];
  }

  parse(input) {
    var data = fs.readFileSync(input).toString().split('\n');
    this.datastore.push(...data);   
  }

  roomDimensions() {
    return this.datastore[0].split(' ').map(Number);  
  }

  hooverPosition() {
    return this.datastore[1].split(' ').map(Number);
  } 

  dirtPatches() {
    var result =  this.datastore.slice(2, -1).map(x => x.split(' '));
    return result.map(x => x.map(Number)); 
  }

  drivingDirections() {
    return this.datastore.slice(-1)[0].split('');
  }
}


module.exports = DataHandler;