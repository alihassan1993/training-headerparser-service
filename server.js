var express = require('express');
var app = express();

app.get('/' , function(req , res){
    var agent = req.headers['user-agent']
    var response = {
        ipaddress: req.headers["x-forwarded-for"],
        language: req.headers['accept-language'].split(',')[0],
        software: agent.substring(agent.indexOf('(') + 1 , agent.indexOf(')'))
    }
    res.send(JSON.stringify(response));
})

app.listen(process.env.PORT || 8080);