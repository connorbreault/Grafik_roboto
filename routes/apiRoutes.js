module.exports = function (app) {
    // PAYPAL SETUP
    const paypal = require("paypal-rest-sdk")
    paypal.configure({
        'mode': 'sandbox', //sandbox or live
        'client_id': process.env.ppid,
        'client_secret': process.env.pps
    });
    app.post('/paypal', (req, res) => {
        console.log(req.body)
        let data = req.body
        let price = 0
        for (let i = 0; i < data.length; i++) {
            price += parseFloat(data[i].Price)
            console.log(price)
        }
        res.send(req.body)
        // const create_payment_json = {
        //     "intent": "sale",
        //     "payer": {
        //         "payment_method": "paypal"
        //     },
        //     "redirect_urls": {
        //         "return_url": "http://localhost:3000/success",
        //         "cancel_url": "http://localhost:3000/cancel"
        //     },
        //     "transactions": [{
        //         "item_list": {
        //             "items": [{
        //                 "name": "Red Sox Hat",
        //                 "sku": "001",
        //                 "price": "25.00",
        //                 "currency": "USD",
        //                 "quantity": 1
        //             }]
        //         },
        //         "amount": {
        //             "currency": "USD",
        //             "total": "25.00"
        //         },
        //         "description": "Hat for the best team ever"
        //     }]
        // };

        // paypal.payment.create(create_payment_json, function (error, payment) {
        //     if (error) {
        //         throw error;
        //     } else {
        //         for (let i = 0; i < payment.links.length; i++) {
        //             if (payment.links[i].rel === 'approval_url') {
        //                 res.redirect(payment.links[i].href);
        //             }
        //         }
        //     }
        // });

    });

    app.get('/success', (req, res) => {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;

        const execute_payment_json = {
            "payer_id": payerId,
            "transactions": [{
                "amount": {
                    "currency": "USD",
                    "total": "25.00"
                }
            }]
        };

        paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
            if (error) {
                console.log(error.response);
                throw error;
            } else {
                console.log(JSON.stringify(payment));
                res.render('successful');
            }
        });
    });

    app.get('/cancel', (req, res) => res.render('cancelled'));
}