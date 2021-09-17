const express = require("express");
const testRoute = require("./test.route");
const challengeRoute = require("./challenge.route");
const docsRoute = require("./docs.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: testRoute,
  },
  {
    path: "/challenge",
    route: challengeRoute,
  },
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
