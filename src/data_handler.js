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
}


datahandler = new DataHandler();
datahandler.parse('./input.txt');
console.log(datahandler.datastore);
console.log(datahandler.datastore.length);






module.exports = DataHandler;