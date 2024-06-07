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
        const price = req.params.assinatura === "mensal"
            ? 'price_1POVQB08gspZg6mjIdZSYg7Z'
            : req.params.assinatura === "anual"
                ? 'price_1POVT908gspZg6mjIMgjKx12'
                : null;

        if (!price) {
            return res.status(400).json({ error: 'Assinatura inválida.' });
        }

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price,
                    quantity: 1
                }
            ],
            mode: 'subscription',
            success_url: `${DOMAIN}?success=true`,
            cancel_url: `${DOMAIN}?canceled=true`,
        })

        if (res.statusCode === 200) return res.redirect(200, session.url)
    } catch (e) {
        return res.json(e)
    }
})

app.post('/payment-sheet', async (req, res) => {
    const customer = await stripe.customers.create()
    const ephemeralKey = await stripe.ephemeralKeys.create(
        {customer: customer.id},
        {apiVersion: '2024-04-10'}
    )

})

app.listen(4000, () => {
    console.log('Server rodando na porta 4000!')
})
