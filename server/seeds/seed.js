const db = require('../config/connection');
const { Pet, Supply } = require('../models');

const petData = require('./petData.json');
const supplyData = require('./supplyData.json');

db.once('open', async () => {
    await Pet.deleteMany({});
    await Supply.deleteMany({});

    const pets = await Pet.insertMany(petData);
    const supplies = await Supply.insertMany(supplyData);

    console.log('Data seeded! 🐯');
    process.exit(0);
});