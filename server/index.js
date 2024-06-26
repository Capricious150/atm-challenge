//Very simple ExpressJS server to get started
import express from "express"; 
import dotenv from "dotenv";
import {router} from "./routes/appRoutes.js";
import cors from 'cors';
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors())
app.use('/', router);

app.listen(port, () => {
    console.log("Listening on " + port);
})