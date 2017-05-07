
/**
 * Affiche les logs dans la console
 * @param {string} tag
 * @param {string} message
 */
module.exports.log = (function(tag, msg){
    console.log("\x1b[33m[" + tag + "] \x1b[37m" + msg)
});

/**
 * Affiche les logs dans la console et en ligne (si dispo)
 * @param {string} tag
 * @param {string} message
 */
module.exports.Alog = (function(tag, msg){
    console.log("\x1b[33m[" + tag + "] \x1b[37m" + msg);
    if (global.socketio.enable)
    {
        global.socketio.sendLog(tag, msg);
    }
    else
    {
        console.log("\x1b[33mLog web indispo\x1b[37m");
    }
});