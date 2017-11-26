/**/

function log(){console.log('...')}

function moving(){
	if($('#bck-motion').length){
	    var arrow = document.querySelector("#bck-motion");
	    var arrowRects = arrow.getBoundingClientRect();
	    var arrowX = arrowRects.left + arrowRects.width / 2;
	    var arrowY = arrowRects.top + arrowRects.height / 2;

	    //$.debounce(fn, timeout)
	    addEventListener("mousemove", $.debounce(function(event) {
	    	//console.log("event.clientY: "+ event.clientY +", event.clientX: "+ event.clientX + ", arrowY: "+ arrowY +", arrowX: "+ arrowX);
	    	$bck1 = (Math.atan2(event.clientY - arrowY, event.clientX - arrowX) * -10.5);
	    	$bck2 = (Math.atan2(event.clientY - arrowY, event.clientX - arrowX) * -3.8);
	    	$bck3 = (Math.atan2(event.clientY - arrowY, event.clientX - arrowX) * -5.2);
    		$('.bck1').css("transform", "translate3D("+ $bck1 +"px, 0px, 0px)");
    		$('.bck2').css("transform", "translate3D("+ $bck2 +"px, 0px, 0px)");
    		$('.bck3').css("transform", "translate3D("+ $bck3 +"px, 0px, 0px)");
	        //arrow.style.transform = "rotate(" + Math.atan2(event.clientY - arrowY, event.clientX - arrowX) + "rad)";
	        
	        //$('.bck1').css("transform", "scale("+ (Math.atan2(event.clientY - arrowY, event.clientX - arrowX)) / 1 +")");
	        
	        //$('.bck3').css("transform", "scale("+ (Math.atan2(event.clientY - arrowY, event.clientX - arrowX)) / 3 +")");
	    }, 50));

	}
}


(function($){
  $(function(){
  	$(document).mousemove(function(event) {
		moving();
	});

  }); // end of module
})(jQuery); // end of jQuery name space

