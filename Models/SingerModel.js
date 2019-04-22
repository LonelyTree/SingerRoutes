const mongoose = require("mongoose")
const Song = require("./SongModel")


const singerSchema = new mongoose.Schema(
    {
    name: {type:String, required: true },
    songs:[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Song"
        // Holds the specified Song's ID
    }]
    }

)

const Singer = mongoose.model('Singer', singerSchema)

module.exports = Singer