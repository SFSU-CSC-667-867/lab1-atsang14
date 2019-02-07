
process.nextTick(() => console.log('Hello'));
setImmediate(() => console.log('Now'));
setImmediate(() => console.log('Now1'));
setImmediate(() => console.log('Now2'));
process.nextTick(() => console.log('Hello1'));
setImmediate(() => console.log('Now3'));
setImmediate(() => console.log('Now4'));


console.log('world');