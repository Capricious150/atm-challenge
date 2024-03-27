import express from 'express';
import pg from 'pg';
export const router = express.Router();

const client = new pg.Client({
    host: 'localhost',
    port: '5432',
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
})

router.post('/login/:id', async (req, res) => {

    try {

    } catch (err) {
        
        res.status(200).send("Stay Golden Ponyboy")
    }
})