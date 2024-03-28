import express from 'express';
import pg from 'pg';
import { getFormattedDate, handleError, simulateLogin, simulatePut } from '../helpers/helpers.js';
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
        const result = await client.query(`SELECT * FROM ACCOUNTS WHERE account = '${req.params.id}'`)
        await client.end()
        res.json({...result, server_date: getFormattedDate()})
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
        const result = await client.query(`UPDATE ACCOUNTS SET amount = '${data.amount}'${data.sum ? `, last_withdraw_date = '${getFormattedDate()}', last_withdraw_sum = ${data.sum}`: ``} WHERE account = '${data.account}'`)
        await client.end()
        res.json(result)


        res.json({
            amount: result.amount
        })
    } catch (err) {
        if (req.body.sum) {
            const response = simulatePut(req.body.account, req.body.amount, req.body.sum)
            console.log(handleError(err.code))
            res.json(response)
        } else {
            const response = simulatePut(req.body.account, req.body.amount)
            console.log(handleError(err.code))
            res.json(response)
        }
    }
})