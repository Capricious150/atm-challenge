import express from 'express';
export const router = express.Router();

router.post('/login/:id', async (req, res) => {
    console.log("Entered POST")
    res.status(200).send("Stay Golden Ponyboy")
})