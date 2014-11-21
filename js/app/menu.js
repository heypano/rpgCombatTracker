/*jslint browser: true*/
/*global $, jQuery, alert, Widget, Player, console*/

function newHumanHandler(e) {
    "use strict";
    /* TODO maybe add naming widget here? */
    Player.getPlayer("human");
}

function newNPCHandler(e) {
    "use strict";
    /* TODO maybe add naming widget here? */
    Player.getPlayer("npc");
}

function nextHandler(e) {
    "use strict";
    Player.queue.next();
}

function initButtons() {
    "use strict";
    $("#newHuman").click(newHumanHandler);
    $("#newNPC").click(newNPCHandler);
    $("#next").click(nextHandler);
}