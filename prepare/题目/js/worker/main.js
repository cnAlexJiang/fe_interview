let i = 0
setInterval(() => {
    console.log('main.js= ', i++)
}, 100)

if (window.Worker) {
    const myWorker = new Worker("worker.js");
}  