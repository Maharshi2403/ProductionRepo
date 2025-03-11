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

server.listen(5000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is Listning on 5000!!");
  }
});
