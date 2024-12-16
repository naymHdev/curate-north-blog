import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);

    app.listen(config.port, () => {
      console.log(`Server running on this port ----->> ${config.port}`);
    });
  } catch (error) {
    `Error from server 😔 connection catch 🤮 block: ${error}`;
  }
}
main();

process.on('unhandledRejection', () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on('uncaughtException', () => {
  process.exit(1);
});
