import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

// let server: Server;

async function main() {
  try {
    await mongoose.connect(config.databaseURL as string);

    app.listen(config.port, () => {
      console.log(`Server running at http://localhost:${config.port} 🏃🏼‍♀️`);
    });
  } catch (error) {
    console.log(`Database connection error: ${error} ⛑`);
  }
}
main();

// process.on('unhandledRejection', () => {
//   if (server) {
//     server.close(() => {
//       process.exit(1);
//     });
//   } else {
//     process.exit(1);
//   }
// });

// process.on('uncaughtException', () => {
//   process.exit(1);
// });
