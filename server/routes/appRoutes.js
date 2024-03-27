import express from 'express';
import pg from 'pg';
import { simulateLogin } from '../helpers/helpers.js';
export const router = express.Router();


router.post('/login/:id', async (req, res) => {
    
    try {
        const client = new pg.Client({
            host: 'localhost',
            port: '5432',
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB
        })
        await client.connect()
        // await client.close()
    } catch (err) {
        const response = simulateLogin(req.params.id)
        console.log(err.code)
        console.log(req.params)
        res.json(response)
    }
})