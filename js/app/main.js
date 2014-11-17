var draggableWidth = 100;
var leftPadding = 10;

$(document).ready(function(e){
	makeDraggable();
});


function makeDraggable(){
	$('.dragme').pep({
		axis:					'x',
		grid:					[draggableWidth],
		shouldEase: 			false,
		useCSSTranslation: 		false,
		constrainTo:			[undefined,3*draggableWidth+leftPadding,undefined,leftPadding], //[top, right, bottom, left]
	}); 
}