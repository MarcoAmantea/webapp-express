const express = require("express");

//creazione app express
const app = express();

//porta server
const port = process.env.SERVER_PORT;

app.use("/", (req,res) => {
    return res.json({
        state: success,
        message: "benvenuti nelle api"
    })
})
app.listen(port, () => {
    console.log(`SERVER M SIEEENT SULLA PORTA ${port}?? T'APPOOOOOST!`);    
})