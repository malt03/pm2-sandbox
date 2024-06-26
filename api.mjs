import { App } from '@tinyhttp/app'

const memoryEater = [];
function eat() {
  memoryEater.push(new Array(1024 * 1024).fill(0));
  setTimeout(eat, 1000);
}
eat();

const app = new App()

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

app.use("/", async (req, res) => {
  console.log('Start');
  await sleep(5000);
  res.send('Hello world!');
  console.log('End');
});

const server = app.listen(3000, () => {
  process.send('ready');
  console.log(`Listening on port ${server.address().port}`);
});

function close() {
  console.log('Shutting down');
  server.close(() => {
    console.log('Closed');
    process.exit(0);
  });
}

process.on('SIGINT', close);
