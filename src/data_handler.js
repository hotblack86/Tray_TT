const fs = require('fs');

class DataHandler {
  constructor(){
    this.datastore = [];
  }

  parse(input) {
    var data = fs.readFileSync(input);
    var filedata = data.toString().split('\n');
    this.datastore.push(...filedata);   
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


datahandler = new DataHandler();
datahandler.parse('./input.txt');
console.log(datahandler.datastore);
console.log(datahandler.drivingDirections());






module.exports = DataHandler;