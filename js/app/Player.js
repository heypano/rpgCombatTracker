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
    Player.list.push(this);
}

/**
 *
 *  Static (Class) properties
 *
 */

function loadPlayerConfig(config) {
    "use strict";
    
    //Figure out what happens if config is there
    // Define All Types
    Player.types = {};
    Player.types.human = {
        name : "P", //TODO: EXTERNALIZE THESE
        currentNum : 0
    };
    Player.types.npc = {
        name : "NPC",
        currentNum : 0
    };
    Player.list = []; // List of all players
    Player.queue = []; // Queue
    
    // Player.currentHealth
    // Player.currentPlayer = ;
    // Player.

    // Conveniently store list of types for dev
    Player.typeList = Object.keys(Player.types);
}

// Load default player config
loadPlayerConfig();

/**
 *  
 * Static (Class) Functions
 *
 */

// Player.getHumanPlayer(name, containerSelector);
//
// Creates a new (Human) player instance and optionally appends it to the selector described
//
// (String) name : player name (optional: Generic Numbered Name if undefined)
// (String) containerSelector : (optional) jquery selector for container div
//
// Returns: player instance
Player.getHumanPlayer = function (name, containerSelector) {
    "use strict";
    
    var player = new Player(name, "human");
    if (containerSelector) {
        player.appendTo(containerSelector);
    }
    
    return player;
};

// Player.getNPC(name, containerSelector);
//
// Creates a new (NPC) player instance and optionally appends it to the selector described
//
// (String) name : player name (optional: Generic Numbered Name if undefined)
// (String) containerSelector : (optional) jquery selector for container div
//
// Returns: player instance
Player.getNPC = function (name, containerSelector) {
    "use strict";
    
    var player = new Player(name, "npc");
    if (containerSelector) {
        player.appendTo(containerSelector);
    }
    return player;
};

// Player.getTotalPlayers()
//
// Returns the number of total players
Player.getTotalPlayers = function () {
    "use strict";
    var list = Player.list;
    return list.length;
};

/**
 *
 *  Instance Methods
 *
 */

Player.prototype.getDOMElement = function () {
    "use strict";
    
    var element = '<div class="dragContainer"><div class="draggable player ' + this.type + ' num' + this.num + '">' + this.name + '</div></div>';
    return element;
};

Player.prototype.appendTo = function (selector) {
    "use strict";
    
    $(selector).append(this.element);
};

