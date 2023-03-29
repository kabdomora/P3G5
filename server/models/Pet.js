const { Schema, model } = require('mongoose');


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
        supplies: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Supply'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

petSchema.virtual('supCount').get(function () {
    return this.supplies.length;
});
// replace this with a summer 

const Pet = model('Pet', petSchema);

module.exports = Pet;