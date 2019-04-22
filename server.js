// EXPRESS
const express = require("express")
const app = express()
const port = 3000
// PATHFINDER
var pathfinderUI = require('pathfinder-ui')
// ROUTES
const routes = require('./Routes/Routes')
//MIDDLEWARE
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
app.use('/pathfinder', function(req, res, next){
    pathfinderUI(app)
    next()
}, pathfinderUI.router)

// DATABASE
require('./db/db')
// USE MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
// ALLOW CSS
app.use(express.static('./public'))
// USE ROUTE
app.use('/music', routes)





// ACTIVATE
app.listen(port, () => console.log(`Singer app listening on port ${port}!`))