const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const petSchema = require('./Pet');
const donationSchema = require('./Donation')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    contPets: [petSchema],
    donations: [donationSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual('petCount').get(function () {
  return this.contPets.length;
});
// might need to combine these... 
userSchema.virtual('donationCount').get(function () {
  return this.donations.length;
});


const User = model('User', userSchema);

module.exports = User;
