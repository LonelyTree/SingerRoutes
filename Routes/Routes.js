const express = require('express');
const router  = express.Router();
const singerControl = require("../Controller/SingerCtrl")
const songControl = require("../Controller/SongCtrl")
const mainControl = require("../Controller/MainCtrl")
// CRUD MODEL
// app.post("/")   CREATE
// app.get("/")    READ
// app.put("/")    UPDATE
// app.delete("/") DELETE



// GET SINGER PAGE
router.get('/SingersNew', singerControl.singerGT)
// GET ABOUT SINGER PAGE
router.get('/Singer/:id', singerControl.singerGTAbout)

// GET MAIN PAGE
router.get("/", mainControl.idxGT)
// NEW SONGS POST
router.post("/", mainControl.idxPST)

// SINGERS



module.exports = router
