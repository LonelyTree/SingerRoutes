require('../DB/DB')
const Singer = require('../Models/SingerModel')
// I N D E X   C R U D

const singerPST = (err, indexget)=>{

}
const singerGT = (req, res) => {
res.render('./Singer/singersNew.ejs')
}
const singerGTAbout = (req, res) => {
    res.render('./Singers/aboutSinger.ejs', {
    singer: Singer[req.params.id]
})
}
const singerPUT = (err, indexget)=>{

}
const singerDLT = (err, indexget)=>{

}

module.exports = {
    singerGT,
    singerGTAbout
}