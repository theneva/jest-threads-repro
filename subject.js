const { Thread, Worker, spawn } = require('threads');

module.exports = {
    async getValue() {
        let thread;
        try {
            thread = await spawn(new Worker('./worker.js'));
            return await thread();
        } finally {
            Thread.terminate(thread);
        }
    },
};
