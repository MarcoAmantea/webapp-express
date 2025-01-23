const express = require("express");
const movieRouter = require("./routers/movies");
const connection = require("./data/db-connection");

//creazione app express
const app = express();

//porta server
const port = process.env.SERVER_PORT;

//definisco le rotte
app.use("/movies", movieRouter);

//controlliamo se il server è connesso
app.listen(port, () => {
    console.log(`SERVER M SIEEENT SULLA PORTA ${port}?? T'APPOOOOOST!`);    
})