
	$(window).load(function(){

	"use strict";

  var firstText = $("#t-1");
  var secondText = $('#t-2');

  firstText.slideDown(800);
  secondText.delay(1000);
  secondText.slideDown(800);

  

  
  



});


 $(document).on("scroll",function(){

/* 	document.title = $(this).scrollTop();*/


  		var nav = $('#nav');

  		if ( nav.scrollTop() > 200 ) {

  			$(nav).animte("height" , "100" +"px", 
  				"background-color" , "#333");
  		}
  		else{
  		 	return nav;
  		}

      

  	

  


  
 
 //});
});



