const { parentPort } = require('worker_threads');
const twoString = require('two-string');

parentPort.postMessage(twoString());
