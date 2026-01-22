const express = require("express");
const serviciosRoutes = require("./routes/servicios.routes");

const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(serviciosRoutes);

module.exports = app;
