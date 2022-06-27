const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 6969;
const admin = require("./config/service-account.js");

const users = [
  {
    email: "naman2003now@gmail.com",
    secret: "Mereko ghar jana hai!!",
  },
  { email: "somerandomemail@gmail.com", secret: "Random secret!" },
];

app.use(express.json());
app.use(cors());

app.get("/", async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = await admin.auth().verifyIdToken(token);
  console.log(user.email);
  res.send(users.filter((u) => u.email == user.email));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
