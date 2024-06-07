const express = require('express');
require("dotenv").config();
const stripe = require('stripe')(process.env.SECRET_API_KEY)
const cors = require('cors');

const app = express()

app.use(express.static('public'));
app.use(express.json())
app.use(cors())

const DOMAIN = 'http://localhost:4000';

app.post('/pay/:assinatura', async (req, res) => {
    try {
        const customer = "cus_QEZRbjITLvjtgR"

        const price = req.params.assinatura === "mensal"
            ? 'price_1POVQB08gspZg6mjIdZSYg7Z'
            : req.params.assinatura === "anual"
                ? 'price_1POVT908gspZg6mjIMgjKx12'
                : null;

        if (!price) {
            return res.status(400).json({ error: 'Assinatura inválida.' });
        }

        const paymentIntent = await stripe.paymentIntents.create({
            amount: price.map(amount => amount),
            currency: 'brl',
            customer: customer
        })

        if(res.statusCode !== 200) return res.json()

        if (res.statusCode === 200) return res.json({
            paymentIntent: paymentIntent,
            publishableKey: process.env.PUBLISHABLE_KEY
        })
    } catch (e) {
        return res.json(e)
    }
})

app.listen(4000, () => {
    console.log('Server rodando na porta 4000!')
})
