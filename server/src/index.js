const express = require('express');
const stripe = require('stripe')('sk_test_51PNlNP08gspZg6mjbhTlpd662PauJDgpPRSOLfZvmt5hJ4xWWpovrhe9Z54xt7eTHAPVaH89qbaCTD9aFgVr9E4A006gfzL7of')
const app = express()
app.use(express.static('public'));
app.use(express.json())

const DOMAIN = 'http://localhost:4000' 

app.post('/pay', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: 
        [
            {
                price: 'price_1PO6DT08gspZg6mjSg4MaJv0',
                quantity: 1
            },
        ],
        mode: 'payment',
        success_url: `${DOMAIN}?success=true`,
        cancel_url: `${DOMAIN}?canceled=true`,
    })

    
    return res.redirect(200, session.url)
})

app.listen(4000, () => {
    console.log('Server rodando na porta 4000!')
})
