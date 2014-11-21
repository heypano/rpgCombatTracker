/*jslint browser: true*/
/*global $, jQuery, alert, console*/

/**
 *  Constructor
 */

function PlayerQueue(list) {
    "use strict";
    this.list = list;
    this.currentPlayer = undefined;
    this.queue = [];
    this.reconfigure();
}

/**
 *
 *  Static (Class) properties
 *
 */


/**
 *  
 * Static (Class) Functions
 *
 */

/**
 *
 *  Instance Methods
 *
 */

PlayerQueue.prototype.reconfigure = function () {
    "use strict";
    
    // Recalculate Queue
    this.queue = this.list.slice(0).sort(function (objA, objB) {
        return (objA.initiative < objB.initiative);
    });
    
    // Each player gets a queue index
    this.queue.forEach(function (player, index) {
        player.queueIndex = index;
    });
    
    // Update current Player index
    if (this.currentPlayer !== undefined) {
        // Add "current" class to player widget
        $('#' + this.currentPlayer.widget.id).addClass("current");
    }
};

PlayerQueue.prototype.next = function () {
    "use strict";
    if (this.currentPlayer === undefined) {
        this.currentPlayer = this.queue[0];
    } else {
        var currentIndex = this.currentPlayer.queueIndex;
        // Remove "current" class from player widget
        $('#' + this.currentPlayer.widget.id).removeClass("current");
        if (currentIndex === this.queue.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex = currentIndex + 1;
        }
        this.currentPlayer = this.queue[currentIndex];
    }
    // Add "current" class to player widget
    $('#' + this.currentPlayer.widget.id).addClass("current");
};