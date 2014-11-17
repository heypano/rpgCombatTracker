$(document).ready(function(e){
	makeDraggable();
});


function makeDraggable(){
	$('.dragme').pep({
		axis:					'x',
		grid:					[100,100],
		shouldEase: 			false,
		useCSSTranslation: 		false,
		constrainTo:			[undefined,100,undefined,10], //[top, right, bottom, left]
	}); 
}