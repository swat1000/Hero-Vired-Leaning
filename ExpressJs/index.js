const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('action', function(msg){
    console.log(msg);
})
eventEmitter.emit('action', 'something')