const { Schema } = require('mongoose');

const supplySchema = new Schema(
    {
        type: {
            type: String,
            required: true,
        },
        cost: {
            type: Number,
            required: true,
            min: 10.00,
        },
    }
);

module.exports = supplySchema;