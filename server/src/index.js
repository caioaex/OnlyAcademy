const express = require('express');
require("dotenv").config();
const stripe = require('stripe')(process.env.SECRET_API_KEY)
const cors = require('cors');

const app = express()

app.use(express.static('public'));
app.use(express.json())
app.use(cors())

const DOMAIN = 'http://localhost:4000';

app.get('/precos', async () => {

})

app.post("/create-payment-month", async (req, res) => {
    await stripe.paymentIntents.create({
        amount: 2500,
        currency: 'BRL'
    })

    if(res.statusCode === 400) return res.json("Nao foi possivel criar o pagamento!")

    if(res.statusCode === 200) return res.json("Pagamento criado!")
})

app.post("/create-payment-year", async (req, res) => {
    await stripe.paymentIntents.create({
        amount: 15000,
        currency: 'BRL'
    })

    if(res.statusCode === 400) return res.json("Nao foi possivel criar o pagamento!")

    if(res.statusCode === 200) return res.json("Pagamento criado!")
})

app.post("/pay/:id", async (req, res) => {
    const { id } = req.params;
    const { paymentMethod } = req.body;

    await stripe.paymentIntents.confirm(id, {
        payment_method: paymentMethod,
        return_url: 'http://www.teste.com'
    })

    if(res.statusCode != 200) return res.json()

    res.json()
})

app.get("/payment/all", async (req,res) => {
    const pagamentos = await stripe.paymentIntents.list()

    if(res.statusCode === 200) return res.json(pagamentos)
})

app.listen(4000, () => {
    console.log('Server rodando na porta 4000!')
})
