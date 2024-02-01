const express = require("express");
const app = express();

app.get("/.well-known/live", (req, resp) => {
  resp.send({
    status: 200,
    msg: "ok",
  });
});

app.listen(3000, () => {
  console.log("server running on port: 3000");
});
