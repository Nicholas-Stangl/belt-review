const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();


app.use(express.json()); //THIS ONE ALLOWS US TO USE JASON
app.use( express.urlencoded({ extended: true }));
app.use(cors())

//MODULARIZED ROUTES AND CONFIG--RENAME THESE
require("./server/config/student.config")
require("./server/routes/student.routes")(app)

app.get("/", (req, res) => {
    res.json({"message": "Is this thing working?"});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
