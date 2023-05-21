const cors = require("cors");
const express = require("express");
const CarsRoute = require("./routes/carRoute.js");

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json);
app.use(CarsRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
