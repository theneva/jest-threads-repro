const { expose } = require('threads/worker');
const mime = require('mime');

async function work() {
    return mime.getType('json')
}

expose(work);
