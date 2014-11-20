/*jslint browser: true*/
/*global $, jQuery, alert, Widget, Player, console*/

function newHumanHandler(e) {
    "use strict";
    /* TODO maybe add naming widget here? */
    Player.getPlayer("human", "#playerList");
}

function newNPCHandler(e) {
    "use strict";
    /* TODO maybe add naming widget here? */
    Player.getPlayer("npc", "#playerList");
}

function initButtons() {
    "use strict";
    $("#newHuman").click(newHumanHandler);
    $("#newNPC").click(newNPCHandler);
}