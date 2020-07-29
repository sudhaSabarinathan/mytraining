const express = require('express')
const app = express()
const expressLayout = require('express-ejs-layouts')
const mongoose = require('mongoose');

const pageRouter = require('./routes/index') 

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
//app.set('view options', {layout: 'views/layout.ejs'});
/*app.set('view engine', 'pug')
app.set('views', __dirname + '/views')*/


app.use(expressLayout)
app.use(express.static('public'))

//mongoose.connect()
app.use('/', pageRouter);

app.listen(process.env.Port || 4001)