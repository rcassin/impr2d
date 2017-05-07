//Bibliotheques
//I/O
var five = require("johnny-five");
var Raspi = require("raspi-io");

//Gestion UI/Web
var webman = require("./webman.js");

var u = require("./utils.js");

//On définit la carte comme Raspberry Pi
var board = new five.Board({
  io: new Raspi(),
  repl: false,
  debug: true,
  timeout: true
});

//Fonction principale
board.on("ready", function() {
  try
  {
    var ecran = new five.LCD({ 
        controller: "PCF8574A"
      });
      ecran.print("Hello");
  }
  catch(e)
  {
    u.Alog("LCD", e.stack)
  }
  console.log(":)");
});


console.log("Start");
