const { version } = require("../../package.json");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "Code Challenge API documentation",
    version,
    license: {
      name: "MIT",
      url: "https://github.com/DevVet/codeChallengeAPI/blob/master/LICENSE",
    },
  },
  servers: [
    {
      url: `http://localhost:3000/v1`,
    },
  ],
};

module.exports = swaggerDef;
