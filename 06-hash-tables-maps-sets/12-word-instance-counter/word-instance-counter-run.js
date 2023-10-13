const wordInstanceCounter = require('./word-instance-counter');

const result = wordInstanceCounter(
  'The quick brown fox jumps over the lazy dog.',
  'the'
);

console.log(result);
