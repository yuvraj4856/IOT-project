const mongoose = require('mongoose');

module.exports = mongoose.model('Sensor', new mongoose.Schema({
    Value: String,
    Data: String
}, { collection: 'brightnessvalue' }));