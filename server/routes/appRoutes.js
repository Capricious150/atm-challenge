import express from 'express';
import pg from 'pg';
import { handleError, simulateLogin, simulatePut } from '../helpers/helpers.js';
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
        const result = await client.query(`SELECT * FROM ACCOUNTS WHERE account_number = '${req.params.id}'`)
        await client.end()
        res.json(result)
    } catch (err) {
        const response = simulateLogin(req.params.id)
        console.log(handleError(err.code))
        res.json(response)
    }
})

router.put('/update', async (req, res) => {
    try {
        const data = req.body
        const client = new pg.Client({
            host: 'localhost',
            port: '5432',
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB
        })
        await client.connect()
        const result = await client.query(`UPDATE ACCOUNTS SET amount = '${data.amount}' WHERE account_number = '${data.account}'`)
        await client.end()
        res.json(result)


        res.json({
            amount: data.amount
        })
    } catch (err) {
        const response = simulatePut(req.body.account, req.body.amount)
        console.log(handleError(err.code))
        res.json(response)
    }
})