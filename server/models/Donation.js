const { Schema } = require('mongoose');

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

module.exports = donationSchema;