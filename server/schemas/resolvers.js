const { User, Pet, Donation, Supply } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');



const resolvers = {
    Query: {
        users: async () => {
            return User.find({}).populate('contPets');
        },       
        oneUser: async (parent, { id, username }, context) => {
            const foundUser =  await User.findOne({
              $or: [{ _id: context.user ? context.user._id : id }, { username: username }],
            });
            if (!foundUser) {
              throw new AuthenticationError('Cannot find a user with this id!');
            }
            return foundUser;
        },
        pets: async () => {
          return Pet.find({}).populate('supplies');
        },
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return ({ token, user });
        },
        // add one pet at a time
        addPet: async (parent, args) => {
          const pet = await Pet.create(args);

          return (pet);
        },
        login: async (parent, args) => {
            const user = await User.findOne({ $or: [{ username: args.username }, { email: args.email }] });
            if (!user) {
              throw new AuthenticationError('No user found with this email address');
            }

            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);

            return ({ token, user });
        },        
    },
};

module.exports = resolvers;