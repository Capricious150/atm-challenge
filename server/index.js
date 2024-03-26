//Very simple ExpressJS server to get started

import express from "express"; 
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("I am listening")
})

app.listen(port, () => {
    console.log("Listening on " + port);
})