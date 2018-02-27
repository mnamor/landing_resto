



$(document).ready(function() {

    //settings for slider
    var currentSlide = 1;
    var interval;

    //get elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);
    var $arrowl = $('#arrowl');
    var $arrowr = $('#arrowr');
    var	$i1 = $('#img1');
    var $i2 = $('#img2');
    var $i3 = $('#img3');

    
    //auto carrousel
    function autoSlider() {
        interval = setInterval(function() { 
            $slideContainer.animate({'margin-left': '-='+ 900}, 1000, function() {  //we ask for a animation right to left by reducing the argin left
                if (++currentSlide === $slides.length) { //we also check for the actual position of the carrousel : if it is at the last pic it discreetly goes back to the first
                    currentSlide = 1;  
                    $slideContainer.css('margin-left', 0); //NINJAAAAA!!!
                }
            });
        }, 5000); //wait for 5sec before doing it again (setInterval function)
    }

    function pauseSlider() {
        clearInterval(interval); //stops the interval
    }


    $slideContainer
        .on('mouseenter', pauseSlider) //if your mouse if on the caroussel it stops
        .on('mouseleave', autoSlider); // if your mouse is out of it it starts

    autoSlider(); //first call of autocarousel

    
    $arrowl.click(function() {  //left arrow function
    	if (currentSlide === 1){
    		currentSlide = 3;
    		$slideContainer.animate({'margin-left': '-=' + 1800}); //from 1 to 3 
    	}
    	else if (currentSlide === 3) {
    		currentSlide = 2;
    		$slideContainer.animate({'margin-left': '+=' + 900}); // from 3 to 2
    	}
    	else if (currentSlide === 2) {
    		currentSlide = 1;
    		$slideContainer.animate({'margin-left': '+=' + 900}); // from 2 to 1
    	}
    	clearInterval(interval); // clean and restart
    	autoSlider();
    });

    $arrowr.click(function() { // right arrow function
    	if (currentSlide === 3){
    		currentSlide = 1;
    		$slideContainer.animate({'margin-left': '+=' + 1800}); // from 3 to 1
    	}
    	else if (currentSlide === 1) {
    		currentSlide = 2;
    		$slideContainer.animate({'margin-left': '-=' + 900}); // from 1 to 2
    	}
    	else if (currentSlide === 2) {
    		currentSlide = 3;
    		$slideContainer.animate({'margin-left': '-=' + 900}); // from 2 to 3
    	}
    	clearInterval(interval); //clear and restart
    	autoSlider();
    });

    $i1.click(function() {  // first dot
    	
    	if (currentSlide === 3){
    		currentSlide = 1;
    		$slideContainer.animate({'margin-left': '+=' + 1800}); //from 3rd pic
    	}
    	else if (currentSlide === 2) {
    		currentSlide = 1;
    		$slideContainer.animate({'margin-left': '+=' + 900});//from 2st pic
    	}
    	clearInterval(interval); //clear and restart
    	autoSlider();
    });

    $i2.click(function() { //second dot
    	if (currentSlide === 3){
    		currentSlide = 2;
    		$slideContainer.animate({'margin-left': '+=' + 900}); //from 3rd pic
    	}
    	else if (currentSlide === 1) {
    		currentSlide = 2;
    		$slideContainer.animate({'margin-left': '-=' + 900});//from 2nd pic
    	}
    	clearInterval(interval); //clear and restart
    	autoSlider();
    });

    $i3.click(function() {  //third dot
    	if (currentSlide === 1){
    		currentSlide = 3;
    		$slideContainer.animate({'margin-left': '-=' + 1800});//from 1st pic
    	}
    	else if (currentSlide === 2) {
    		currentSlide = 3;
    		$slideContainer.animate({'margin-left': '-=' + 900});//from 2nd pic
    	}
    	clearInterval(interval); //clear and restart
    	autoSlider();
    });

//--------------------------------------------------------------

		//tabs functions
    var selected = 1;

    $(':button').click(function () { //on button click it hides all the tabs and depending on wich button was pressed display the corresponding tab

    		$('.screen').hide();

        if (selected != this.value) { //check if the click button is already active
            
            selected = this.value;
            $('#tab_' + selected).slideDown(); //display animation
        }
        else {
        	$('#tab_' + selected).show(); //no animation if already active
        }
    });


});



