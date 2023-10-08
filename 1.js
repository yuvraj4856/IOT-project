const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jatt:Sekhon1@sit314.vwkkpj4.mongodb.net/ ', { useNewUrlParser: true, useUnifiedTopology: true });
const express = require('express');
const bodyParser = require('body-parser');
const Sensordata = require('./models/sensor');

const app = express();
const port = 5003;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Function to generate random data and push it to the database
function pushDataToDatabase() {
    // Generate random data
    const brightnessData = Math.floor(Math.random() * 101);
    const statusData = Math.floor(Math.random() * 101);

    // Store data in MongoDB
    const newData = new Sensordata({
        Value: brightnessData,
        Data: statusData
    });

    newData.save()
        .then(() => {
            console.log('Data stored successfully');
        })
        .catch((error) => {
            console.error('Data could not be stored:', error);
        });
}

// Set an interval to push data every 1 second
setInterval(pushDataToDatabase, 1000);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});