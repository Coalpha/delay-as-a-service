const express = require("express");

const app = express();

const httpPort = 80;

app.use(express.static("."));

app.get("/", (req, res) => {
   res.redirect('/index.html');
});

app.get("/query", (req, res) => {
   const networkLatency = Date.now() - req.query.time;
   const roundtripLatency = networkLatency * 2;
   const waitTime = req.query.ms - roundtripLatency;
   if (waitTime < 2) {
      res.sendStatus(202);
   } else {
      setTimeout(() => { res.sendStatus(200); }, waitTime);
   }
});

app.listen(httpPort);
