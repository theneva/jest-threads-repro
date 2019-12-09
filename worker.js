const { expose } = require('threads/worker');
const tempy = require('tempy');

function work() {
    return tempy.file();
}

expose(work);
