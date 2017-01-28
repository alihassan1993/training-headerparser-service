var express = require('express');
var app = express();

app.get('/' , function(req , res){
    res.send('Hello Heroku!');
})

app.listen(3000);