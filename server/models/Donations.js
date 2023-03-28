const { Schema, model } = require('mongoose');

const userSchema = require('./User');
const petSchema = require('./Pet')

const donationSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true,
            min: 0.01,
        },
        message: {
            type: String,
            required: false,
        },
        donor: [userSchema],
    }
);

const Donation = model('Donation', donationSchema);

module.exports - Donation;