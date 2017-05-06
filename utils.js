
/**
 * Affiche les logs dans la console
 * @param {string} tag
 * @param {string} message
 */
module.exports.log = (function(tag, msg){
    console.c
    console.log("\x1b[33m[" + tag + "] \x1b[37m" + msg)
});
