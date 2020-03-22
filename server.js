const express = require('express');

const port = 443; // http
const app = express();

app.use(express.static('.'));

app.get('/', (req, res) => {
  res.redirect('/README.md');
});

app.get('/query', (req, res) => {
  const networkLatency = new Date().getTime() - req.query.time;
  const roundtripLatency = networkLatency * 2;
  const waitTime = req.query.ms - roundtripLatency;
  if (waitTime < 2) {
    res.send(0);
  } else {
    setTimeout(() => { res.send(1); }, waitTime);
  }
});

app.listen(port, () => {
  console.log(`We're up and running on port ${port}`);
});
