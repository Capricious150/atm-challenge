//Very simple ExpressJS server to get started
import express from "express"; 
import dotenv from "dotenv";
import pg from 'pg';
dotenv.config();

const pool = new pg.Pool({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT,
    host: 'localhost',
})

const client = new pg.Client({
    user: 'austin',
    password: 'test',
    database: 'challenge',
    port: '5432',
    host: '127.0.0.1'
})

const app = express();
const port = '3000';

app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM accounts');
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
    
})
app.get('/c', async (req, res) => {
    try {
        console.log("Fetching")
        await client.connect()
        const result = await client.query('SELECT * FROM accounts'); 
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
    
})

app.listen(port, () => {
    console.log("Listening on " + port);
})