const path = require('path');
const { Worker, spawn } = require('threads');

module.exports = {
    async getValue() {
        const work = await spawn(new Worker('./worker.js'));
        return work();
    },
};
