/*jslint browser: true*/
/*global $, jQuery, alert, console, Player*/

/**
 *  Global vars
 */
var draggableWidth = 250;
var leftPadding = 10;
var containerSelector = "#playerList";
/**
 *  Constructor
 */

function Widget(player) {
    "use strict";
    
    this.player = player;
    this.id = this.player.type + this.player.num;
    this.classes = [this.player.type, "draggable", "player", "noselect"];

    this.html = this.getHTML();
    
    //this.makeDraggable();
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

//TODO add double click to name

Widget.prototype.updateInitiative = function (initiative) {
    "use strict";
    var selector = "#" + this.id + " .initiative";
      
    // Update player object
    this.player.updateInitiative(initiative);
    
    // Update widget
    $(selector).text(initiative);

};


Widget.prototype.getHTML = function () {
    "use strict";
    
    var html = '<div class="dragContainer">' +
                   '<div class="' + this.classes.join(" ") + '" id="' + this.id + '">' +
                       '<span class="name">' + this.player.name  + '</span>' +
                       '<span class="initiative">' + (this.player.initiative || "5")  + '</span>' +
                   '</div>' +
               '</div>';
    return html;
};

Widget.prototype.makeDraggable = function () {
    "use strict";
    var playerselector = "#" + this.id,
        nameselector = "#" + this.id + ".name",
        initiativeselector = "#" + this.id + ".initiative",
        widget = this,
        player = this.player,
        
        $pep;
    
    // TODO: consider removing pep - not sure it adds much
    // TODO: separate which part you touched first - move up/down if touching initative, left/right otherwise
    
    function unpep() { // Disables left/right movement for this widget
        if ($pep) {
            $.pep.unbind($pep);
        }
    }
    function pep() { // Enables left/right movement for this widget
        unpep();
        $pep = $(playerselector).pep({      // Make this draggable (left/right)
            axis:                     'x',
            grid:                     [draggableWidth],
            shouldEase:               false,
            useCSSTranslation:        false,
            constrainTo:              [undefined, 3 * draggableWidth + leftPadding, undefined, leftPadding] //[top, right, bottom, left]
        });
    }
    

    // Handle initiative  changes
    function touchDownHandler(e) {
        //console.log("vmousedown");
        var originalY = e.screenY,
            originalInitiative = player.initiative;
        function touchUpHandler(e) {
            //console.log("vmouseup");
            $(document).off("vmouseup.clickableElement");
            $(document).off("vmousemove.clickableElement");
            pep(); // Enable Left/Right movement for this widget
            if (originalInitiative !== player.initiative) {
                Player.redraw(containerSelector);
            }
        }

        function touchMoveHandler(e) {
            //console.log("vmousemove");
            var currentY = e.screenY,
                difference = originalY - currentY,
                pixelThreshold = 10,
                adjustment = parseInt(difference / pixelThreshold, 10);
            
            // Adjust initiative
            if (adjustment) {
                widget.updateInitiative(player.initiative + adjustment);
                originalY = currentY;
                unpep(); // Disable Left/Right movement for this widget if we get a value change (if user moves sufficiently up or down)
            }
        }
        
        $(document).on("vmousemove.clickableElement", touchMoveHandler);
        $(document).on("vmouseup.clickableElement", touchUpHandler);
    }
    
    $(playerselector).on("vmousedown", touchDownHandler);
};
