const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    title: String,
    genre: {
        type: string,
        enum: ['Action', 'Adventure', 'RPG', 'Simulation', 'Strategy', 'Sports', 'MMO']
    }
})