const app = require("./app");
const db = require('../models');
const config = require('../config/config.json')

// Connect with Database, then Run Application
db.sequelize.sync().then(req => {
  server = app.listen(3000, () => {
    console.log(`CodeChallengeAPI is running on port 3000`)
  });
})

//  Gracefully close server
const exitHandler = () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  if (server) {
    server.close();
  }
});
