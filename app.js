const express = require('express');
const app = express();
var userctrl = require("./controller/userController");

const router = require('./Routes/route');
app.use(router)
const port = 3000;

app.listen(3000, ()=> {
    console.log("App is running on : http://localhost:3000");
})