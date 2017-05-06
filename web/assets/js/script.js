var socket = io();

socket.on("log", afficherLog);

var logId = 0;

function afficherLog (data)
{
    console.log(data);
    var logContainer = $("#log");

    var logDiv = $("<div>").attr("id", "log" + logId);

    var logTime = $("<span>").addClass("logTime").text(moment().format('hh:mm:ss'));
    var logMessage = $("<span>").addClass("logMessage").text(data.msg);

    logTime.appendTo(logDiv);
    logMessage.appendTo(logDiv);

    logDiv.appendTo(logContainer);


    logId++;
}