import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const cooker = new MyEmitter();
cooker.on('event', () => {
  console.log('Wisle adikn off aak!');
  setTimeout(()=>{
    console.log('Eda cooker off aaak!!!!!');
  },3000)
});
console.log('Cooker kooviyo?');
cooker.emit('event');
