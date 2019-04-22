const mongoose = require("mongoose")
const Singer = require('./SingerModel')


const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: String,
    contributors: [ {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Singer'
         // Holds the specified Singer's ID
    }]
})

const Song = mongoose.model('Song', songSchema)

module.exports = Song