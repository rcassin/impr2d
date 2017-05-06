var socket = io();
moment().format("fr");

//Définition du mot-clé "log"
socket.on("log", afficherLog);

var logId = 0;

//Callback: Affiche le log dans le conteneur
function afficherLog (data)
{

    console.log(data);

    //On récupere le conteneur
    var logContainer = $("#log");

    //On définit le support
    var logDiv = $("<div>").attr("id", "log" + logId);

    //On définit les spans
    var logTime = $("<span>").addClass("logTime").text(moment().format('HH:mm:ss'));
    var logMessage = $("<span>").addClass("logMessage").text(data.msg);

    //On applique les changements
    logTime.appendTo(logDiv);
    logMessage.appendTo(logDiv);

    logDiv.appendTo(logContainer);


    logId++;
}