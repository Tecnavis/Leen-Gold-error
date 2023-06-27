$(document).ready(function() {

	// OWL CAROUSEL INSTALLATION
	$("#testimonial-carousel").owlCarousel({
		items:1,
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,1], // betweem 900px and 601px
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:true
	});
	$("#home-slider").owlCarousel({
		items:1,
		itemsDesktop : [1000,1], //5 items between 1000px and 901px
      	itemsDesktopSmall : [900,1], // betweem 900px and 601px
      	itemsTablet: [600,1],
		itemsMobile :[479,1],
		pagination:false,
		navigation:true,
		navigationText:["<i class='ion-ios-arrow-left'></i>","<i class='ion-ios-arrow-right'></i>"]

	});

	/* Navigation Menu*/
	var offsettop = $('.navbar').offset().top;
	if (offsettop > 50) {
        $('.navbar').addClass('colored-nav');
        $('.navbar').addClass('gradient-violat');
        $("#scroll-top-div").fadeIn('500');
    } else {
        $('.navbar').removeClass('colored-nav');
        $('.navbar').removeClass('gradient-violat');
        $("#scroll-top-div").fadeOut('500');
    }
	var num = 50; //number of pixels before modifying styles

	$(window).bind('scroll', function () {
	    if ($(window).scrollTop() > num) {
	        $('.navbar').addClass('colored-nav');
	        $('.navbar').addClass('gradient-violat');
	        $("#scroll-top-div").fadeIn('500');
	    } else {
	        $('.navbar').removeClass('colored-nav');
	        $('.navbar').removeClass('gradient-violat');
	        $("#scroll-top-div").fadeOut('500');
	    }
	});



	/* SMOOTH SCROLLING SCRIPT*/
	// Add smooth scrolling to all links
	$(".navbar-nav li a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){

				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} // End if
	});

	/****************************BACK TO TOP************************************/
	$('#scroll-top-div').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
 
});



// -----Country Code Selection
$("#mobile_code").intlTelInput({
	initialCountry: "in",
	separateDialCode: true,
	
});

//----SUBMIT BUTTON
// Add an event listener to the form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
	e.preventDefault(); // Prevent the default form submission
  
	// Get the form values
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var phone = document.getElementById('phone').value;
	var service = document.getElementById('service').value;
	var messageContent = document.getElementById('message').value;
  
	// Construct the WhatsApp message
	var message = "Name: " + name + "\n";
	message += "Email: " + email+ "\n";
	message += "Phone Number: " + phone+ "\n";
	message += "Service Requestig: " + service+ "\n";
	message += "Message: " + messageContent;
  
	// Open WhatsApp in a new window or tab with the message
	window.open("https://wa.me/916282414031?text=" + encodeURIComponent(message), "_blank");
  });
  $(document).ready(function(){
	$('.carousel').carousel({
	  padding:800,
	  dist:-200        
	});
  });