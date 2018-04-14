/**
 * Created by hp on 2/22/2017.
 */
var express = require('express');
var path = require('path');
var app = express();
app.use("/stylesheets", express.static(__dirname + '../public/images'));
app.use("/stylesheets", express.static(__dirname + '../public/stylesheets'));
app.get('/', function (req,resp) {
    resp.sendFile('index.html',{root: path.join(__dirname,'../views')})

})
app.listen(8000, function () {
    console.log('Listening');
})