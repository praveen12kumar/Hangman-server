const express = require("express");
const PORT = 3000;
const app = express();
const path= require("path");
const cors = require("cors");

app.use(cors());


app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "db.json"));
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

