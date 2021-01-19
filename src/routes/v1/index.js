const express = require("express");
const testRoute = require("./test.route");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: testRoute,
  },
  // {
  //   path: '/challenge',
  //   route: challengeRoute,
  // },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
