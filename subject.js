const path = require('path');
const { Worker } = require('worker_threads');



module.exports = {
    getValue() {
        return new Promise((resolve, reject) => {
            const worker = new Worker(path.resolve(__dirname, 'worker.js'));
            worker.on('message', resolve);
            worker.on('error', reject);
            worker.on('exit', (code) => {
                if (code !== 0)
                    reject(new Error(`Worker stopped with exit code ${code}`));
            });
        });
    },
};
