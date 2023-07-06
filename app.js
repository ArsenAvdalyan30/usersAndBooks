const express = require("express");
const app = express();
const PORT = 2000;
const router = require("./index");

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
