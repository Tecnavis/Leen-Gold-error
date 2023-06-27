$(document).ready(function()
{

   
        if($('.bbb_viewed_slider').length)
        {
            var viewedSlider = $('.bbb_viewed_slider');

            viewedSlider.owlCarousel(
            {
                loop:true,
                autoplay:true,
                autoplayTimeout:4000,
                nav:false,
                dots:false,
                responsive:
                {
                    0:{items:1},
                    200:{items:2},
                    375:{items:3},
                    360:{items:3},
                    390:{items:3},
                    420:{items:4},
                    991:{items:4},
                    1024:{items:5},
                    1199:{items:6}
                }
            });

            if($('.bbb_viewed_prev').length)
            {
                var prev = $('.bbb_viewed_prev');
                prev.on('click', function()
                {
                    viewedSlider.trigger('prev.owl.carousel');
                });
            }

            if($('.bbb_viewed_next').length)
            {
                var next = $('.bbb_viewed_next');
                next.on('click', function()
                {
                    viewedSlider.trigger('next.owl.carousel');
                });
            }
        }


    });