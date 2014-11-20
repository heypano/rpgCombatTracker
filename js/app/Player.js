/*jslint browser: true*/
/*global $, jQuery, alert, Widget*/

/**
 *  Constructor
 */

function Player(type, containerSelector, name) {
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
    this.initiative = 10;
    
    // Add Widget here
    this.widget = new Widget(this, containerSelector);
    
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
    //Player.queue = []; // Queue
    
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

// Player.getPlayer(type, name, containerSelector);
//
// Creates a new (Human) player instance and optionally appends it to the selector described
// (String) type : player type (look at Player.types)
// (String) containerSelector : jquery selector for container div
// (String) name : player name (optional: Generic Numbered Name if undefined)
//
// Returns: player instance
Player.getPlayer = function (type, containerSelector, name) {
    "use strict";
    
    var player = new Player(type, containerSelector, name);
    
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

Player.prototype.updateInitiative = function (initiative) {
    "use strict";
    
    this.initiative = initiative;
};

