$(function() {

	if ( $('.owl-2').length > 0 ) {
        $('.owl-2').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 10,
            smartSpeed: 1000,
            autoplay: true,
            nav: true,
            dots: true,
            pauseOnHover: true,
            responsive:{
                600:{
                    margin: 10,
                    nav: true,
                  items: 1
                },

                1000:{
                    margin: 10,
                    stagePadding: 0,
                    nav: true,
                  items: 3
                }
            }
        });            
    }

})