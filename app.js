//Bibliotheques
//I/O
var five = require("johnny-five");
var Raspi = require("raspi-io");

//Gestion UI/Web
var webman = require("./webman.js");

//On définit la carte comme Raspberry Pi
var board = new five.Board({
  io: new Raspi()
});

//Fonction principale
board.on("ready", function() {
  console.log(":)");
});


console.log("Start");
