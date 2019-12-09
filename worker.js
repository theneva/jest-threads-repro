const { expose } = require('threads/worker');
const mime = require('mime');

function work() {
    return mime.getType('json')
}

expose(work);
