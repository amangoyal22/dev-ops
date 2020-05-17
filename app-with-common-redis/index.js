const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
  host:'redis-server',
  port:6379
});
client.set('visits',0);

app.get("/", (req, res) => {
  process.exit(0);
  client.get('visits',(err,visit) => {
    res.send(" ddd " + visit)
    // res.send(" <br> ddd " + err)
    client.set('visits',parseInt(visit)+1)
  })

  // res.send("How are you doing");
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
 