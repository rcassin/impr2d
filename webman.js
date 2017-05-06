//Bibliotheques
//Serveur Web
var express = require('express');
var app = express();
var server = require('http').Server(app);
//Serveur Socket
var io = require('socket.io')(server);
//Gestion de Config
var config = require('./config.js');

var u = require("./utils.js");
var path = require('path');

//Mise en place des variables globals
global.socketio = {};
global.socketio.enable = false;

//Init du Serveur
server.listen(config.ServPort);

//Def racine
app.get('/', function (req, res) {
    var tag = "Express"
    res.sendfile(config.ServRoot + '/test.html');
    u.log(tag, "/")
});

//Def fichier ressources
app.use("/assets", express.static(path.join(config.ServRoot, 'assets')));

//Def Socket
io.on('connection', function (socket) {
    global.socketio.enable = true;

    //Affiche logs sur page web
    global.socketio.sendLog = function(tag, msg){
        socket.emit("log",{ "msg": "[" + tag + "] " + msg });
    }

    //Message de bienvenue
    var tag = "SOCKET.IO";
    global.socketio.sendLog(tag, "Hello")
    u.log(tag, "Nouveau client");    
});