//Bibliotheques
//Serveur Web
var app = require('express')();
var server = require('http').Server(app);
//Serveur Socket
var io = require('socket.io')(server);
//Gestion de Config
var config = require('./config.js');

var u = require("./utils.js");

//Init du Serveur
server.listen(config.ServPort);

//Def racine
app.get('/', function (req, res) {
    var tag = "Express"
    res.sendfile(config.ServRoot + '/test.html');
    u.log(tag, "/")
});

//Def Socket
io.on('connection', function (socket) {
    var tag = "SOCKET.IO"
    u.log(tag, "Nouveau client")
});