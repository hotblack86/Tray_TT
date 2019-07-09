const DataHandler = require('./src/data_handler')
const Floor = require('./src/floor')
const Hoover = require('./src/hoover')

const game = (function(){
    let datahandler = new DataHandler();
    datahandler.parse('./input.txt');
    let floor = new Floor(datahandler.roomDimensions(), datahandler.dirtPatches());
    let hoover = new Hoover(floor, datahandler.hooverPosition());
    hoover.move(datahandler.drivingDirections());
    console.log([hoover.position[0], hoover.position[1]].join(' '));
    console.log(hoover.dirtCleaned.toString());
})();
