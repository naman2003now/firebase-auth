const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 6969;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("You are here!");
});

app.post("/", (req, res) => {
  res.send(req.user_token);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
