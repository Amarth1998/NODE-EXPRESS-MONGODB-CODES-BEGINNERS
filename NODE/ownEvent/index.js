// Node.js has a built-in module, called "Events", where you can create-, fire-, and listen for- your own events.
//o fire an event, use the emit() method.
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// var myEventHandler = function () {
//     console.log('I hear a scream!');
//   }

// eventEmitter.on('hello',myEventHandler); //Register the handler 
// eventEmitter.emit('hello');             //Fire an event


// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('hello',()=>{console.log('I hear a scream!')}); //Register the handler
// eventEmitter.emit('hello');  



//you can call multiple callback
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// eventEmitter.on('hello',()=>{console.log('amarth')}); //Register the handler
// eventEmitter.on('hello',()=>{console.log('patel')}); //Register the handler
// eventEmitter.on('hello',()=>{console.log('vidisha')}); //Register the handler

// eventEmitter.emit('hello');  





//registerring for event with callback parameter
var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('hello',(sc,msg)=>{
    console.log(`status code ${sc} and message is :${msg}`);
})
eventEmitter.emit('hello',200,'ok');  
//output :status code 200 and message is :ok
