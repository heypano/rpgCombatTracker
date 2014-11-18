/*jslint browser: true*/
/*global $, jQuery, alert*/

/**
 *  Constructor
 */

function Player(name, type) {
    "use strict";
    
    var thisType = Player.types[type];
    // Increase the current number of players for that type
    thisType.currentNum = thisType.currentNum + 1;
    
    if (name && name.length > 0) {
        this.name = name;
    } else {
        this.name = thisType.name + thisType.currentNum; // Name players based on what they are if no custom name is given
    }
    
    if (type && type.length > 0) {
        this.type = type;
    }
    this.num = thisType.currentNum;
    this.element = this.getDOMElement();
    
}

/**
 *  Static (Class) properties
 */

function loadPlayerConfig(config) {
    "use strict";
    
    //Figure out what happens if config is there
    // Define All Types
    Player.types = {};
    Player.types.human = {
        name : "P", //TODO: EXTERNALIZE THESE
        color : "rgb(0,255,255);",
        currentNum : 0
    };
    Player.types.npc = {
        name : "NPC",
        color : "rgb(255,255,0);",
        currentNum : 0
    };

    // Player.queue = [];
    // Player.currentPlayer = ;
    // Player.

    // Conveniently store list of types for dev
    Player.typeList = Object.keys(Player.types);
}

// Load default player config
loadPlayerConfig();

/**
 *  Static (Class) Functions
 */

// getHumanPlayer(name, containerSelector);
// (String) name : player name (Optional: Generic Numbered Name if undefined)
// (String) containerSelector : jquery selector for container div
//
// Returns: player instance
Player.getHumanPlayer = function (name, containerSelector) {
    "use strict";
    
    var player = new Player(name, "human");
    if (containerSelector) {
        player.attachTo(containerSelector);
    }
    
    return player;
};

// getNPC(name, containerSelector);
// (String) name : player name (Optional: Generic Numbered Name if undefined)
// (String) containerSelector : jquery selector for container div
//
// Returns: player instance
Player.getNPC = function (name, containerSelector) {
    "use strict";
    
    var player = new Player(name, "npc");
    if (containerSelector) {
        player.attachTo(containerSelector);
    }
    return player;
};

/**
 *  Instance Methods
 */

Player.prototype.getDOMElement = function () {
    "use strict";
    
    var element = '<div class="dragContainer"><div class="draggable player ' + this.type + ' num' + this.num + '">' + this.name + '</div></div>';
    return element;
};

Player.prototype.attachTo = function (selector) {
    "use strict";
    
    $(selector).append(this.element);
};

