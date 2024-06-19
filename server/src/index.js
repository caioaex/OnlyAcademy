const express = require('express');
require("dotenv").config();
const stripe = require('stripe')(process.env.SECRET_API_KEY)
const cors = require('cors');

const app = express()

app.use(express.static('public'));
app.use(express.json())
app.use(cors())

app.post("/create-payment-month", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 2500,
            currency: 'BRL'
        });

        res.status(200).json({ clientSecret: paymentIntent.client_secret });
    } catch (error) {
        console.error('Erro ao criar PaymentIntent:', error.message);
        res.status(400).json({ error: 'Erro ao criar PaymentIntent' });
    }
})

app.post("/create-payment-year", async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: 15000,
            currency: 'BRL'
        })

        if(res.statusCode === 2000) res.status(200).json({ clientSecret: paymentIntent.client_secret });
    }catch (e) {
        console.error('Erro ao criar PaymentIntent:', error.message);
        res.status(400).json({ error: 'Erro ao criar PaymentIntent' });
    }

    if(res.statusCode === 400) return res.json("Nao foi possivel criar o pagamento!");

})

app.listen(4000, () => {
    console.log('Server rodando na porta 4000!');
})
