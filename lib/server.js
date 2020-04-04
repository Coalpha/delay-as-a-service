const express = require("express");

const app = express();

const httpPort = 80;

app.use(express.static("."));

app.get("/", (_, res) => {
   res.redirect("/index.html");
});

const STATUS_OK = 200;
const STATUS_ACCEPTED = 202;

app.get("/query", (req, res) => {
   const networkLatency = Date.now() - req.query.time;
   const roundtripLatency = networkLatency * 2;
   const waitTime = req.query.ms - roundtripLatency;
   if (waitTime < 1) {
      res.sendStatus(STATUS_ACCEPTED);
   } else {
      setTimeout(() => { res.sendStatus(STATUS_OK) }, waitTime);
   }
});

app.listen(httpPort);
