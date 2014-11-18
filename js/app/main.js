var draggableWidth = 100;
var leftPadding = 10;

$(document).ready(function(e){
	Player.getHumanPlayer(undefined, "#playerList");
	Player.getHumanPlayer(undefined, "#playerList");
	Player.getHumanPlayer(undefined, "#playerList");
	Player.getHumanPlayer(undefined, "#playerList");
    Player.getNPC(undefined, "#playerList");
    Player.getNPC(undefined, "#playerList");
    Player.getNPC(undefined, "#playerList");
    Player.getHumanPlayer(undefined, "#playerList");
                  

    init();
});

function init(){
    makeDraggable('.draggable');
}

function makeDraggable(selector){
	$(selector).pep({
		axis:					'x',
		grid:					[draggableWidth],
		shouldEase: 			false,
		useCSSTranslation: 		false,
		constrainTo:			[undefined,3*draggableWidth+leftPadding,undefined,leftPadding], //[top, right, bottom, left]
	}); 
}