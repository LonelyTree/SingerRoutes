require('../DB/DB')
const Songs = require('../Models/SongModel')
const Singers = require('../Models/SingerModel')



const idxPST = (req, res) => {
    req.body = JSON.parse(JSON.stringify(req.body));
    if (req.body.hasOwnProperty('contributors') === true) {
        Songs.create(req.body, (err, songCreate) => {
            if (err) {
                res.send(err)
            } else {
                res.redirect('/music')
            }
        })
    } else if (req.body.hasOwnProperty('name') === true) {
        Singers.create(req.body, (err, singerCreate) => {
            if (err) {
                res.send(err)
            } else {
                Singers.find({}, (err, listSingers) => {
                    if (err) {
                        res.send(err)
                    } else {
                        res.render('index.ejs', {
                            singers: listSingers,
                            songs: Songs
                        })
                    }
                })
            }
        })
    }
}
const idxGT = (req, res) => {
    res.render('index.ejs', {
        songs: Songs,
        singers: Singers
    })
}

const idxPUT = (err, indexget)=>{

}
const idxDLT = (err, indexget)=>{

}

module.exports = {
    idxGT,
    idxPST
}