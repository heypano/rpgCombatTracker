/*jslint browser: true*/
/*global $, jQuery, alert, Widget, Player, console*/

function init() {
    "use strict";
    initButtons();
}

$(document).ready(function (e) {
    "use strict";
    var initialHumans = 2;
    var initialNPCs = 2;
    for(var i = 0 ; i < initialHumans ; i++){
	   Player.getPlayer("human", "#playerList");
    }
    for(var i = 0 ; i < initialNPCs ; i++){
	   Player.getPlayer("npc", "#playerList");
    }

    init();
});

