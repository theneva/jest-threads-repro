const { expose } = require('threads/worker');
const twoString = require('two-string');

function work() {
    return twoString();
}

expose(work);
