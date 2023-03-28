const { Schema, model } = require('mongoose');

const suppliesSchema = require('./Supply');

const petSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: false,
        },
        image: {
            type: String,
        },
        summary: {
            type: String,
            required: true,
        },
        supplies: [suppliesSchema],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

petSchema.virtual('supCount').get(function () {
    return this.supNeeded.length;
});
// replace this with a summer 

const Pet = model('Pet', petSchema);

module.exports = Pet;