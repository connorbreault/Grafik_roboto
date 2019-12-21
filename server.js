require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");

// PAYPAL SETUP
const paypal = require("paypal-rest-sdk")
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ASOj39ui1jwfCC4wrJmnuwVu4h2GqTznEK4fssniw2z5EzXpQhid8gppnKM_84BI_DR7PHzivszAvf5G',
    'client_secret': 'EG8crd1wd1mm9JaZ2P6yROMge_AkBNiT7XlN1q4bnw6Bocpr5TB0_WFNjPdmT7TZAWhXVKmGLLpnMqNL'
});

// var db = require("./models");
// response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine(
    "handlebars",
    exphbs({
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

// Routes
// require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
}

app.get('/', (req, res) => res.render('index'));

app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "GrafikRoboto Order",
                    "sku": "001",
                    "price": "5.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "5.00"
            },
            "description": "GrafikRoboto"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0; i < payment.links.length; i++) {
                if (payment.links[i].rel === 'approval_url') {
                    res.redirect(payment.links[i].href);
                }
            }
        }
    });

});

app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;

    const execute_payment_json = {
        "payer_id": payerId,
        "transactions": [{
            "amount": {
                "currency": "USD",
                "total": "5.00"
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


// Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync(syncOptions).then(function () {
app.listen(PORT, function () {
    console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
    );
});
// });

module.exports = app;