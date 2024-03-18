import { startServer } from './app/index.js';

const app = await startServer();

const server = app.listen(8000, () => {
  console.log(`Server is running on port ${server.address().port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
