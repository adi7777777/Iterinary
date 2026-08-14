const express = require("express");
const cors = require("cors");

const tripRoutes = require("./routes/tripRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", tripRoutes);

app.listen(5000, () => {
    console.log("Listening on 5000");
});