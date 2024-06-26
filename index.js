const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const accountSid = 'AC0fa215d0cf86e5e40c80e1c5efae52cb';
const authToken = '2f322d323fc82c6e60ded3950eefc684';
const client = require('twilio')(accountSid, authToken);

app.use(bodyParser.json());
app.use(express.static('public')); // Serve your HTML file

app.post('/send-otp', (req, res) => {
    const { phone } = req.body;

    client.messages
        .create({
            body: 'Hello world 1234',
            to: phone, // Text the provided number
            from: '+15304571489', // From a valid Twilio number
        })
        .then((message) => {
            console.log(message.sid);
            res.json({ success: true });
        })
        .catch((error) => {
            console.error(error);
            res.json({ success: false });
        });
});

app.listen(8080, () => {
    console.log("Server running at 8080");
});

