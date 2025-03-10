const exp = require("express");
const cors = require("cors");
const server = exp();

server.use(cors());
//{ origin: "https://production-repo.vercel.app" }
server.get("/", (req, res) => {
  res.status(200).send({
    msg: "Server responded",
  });
});
