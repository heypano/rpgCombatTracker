/*jslint browser: true*/
/*global $, jQuery, alert, Widget, Player*/

function init() {
    "use strict";
}

$(document).ready(function (e) {
    "use strict";
	Player.getPlayer("human", "#playerList");
	Player.getPlayer("npc", "#playerList");
                  

    init();
});

