const { Schema, model } = require('mongoose');

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
    }
);

const Donation = model('Donation', donationSchema);

module.exports - Donation;