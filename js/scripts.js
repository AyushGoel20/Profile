(function($) {
    "use strict";

    //======================
    // Parallax
    //======================
	var parallax = new Scrollax();
        parallax.reload();
        parallax.init();


    //======================
    // Fancybox
    //======================
    $('[data-fancybox]').fancybox();

    
    
    //===================================
    // Measure height of top header
    //==================================
	var headerHeight = $('.header-sec').outerHeight();
	$('.page-projects-sec, .blog-sec, .blog-details-sec, .fourzerofour-sec, .contact-sec').css('margin-top', headerHeight + "px");


	//======================
    // Menu
    //======================    
	$('.mobile-menu').on('click', function(e) {
        e.stopPropagation();
		$('.navbar-sec').addClass('slide-navbar').css({
            zIndex: 4
        });
	});
    $('body, html, #close-menu').on('click', function(e) {
        $('.navbar-sec').removeClass('slide-navbar').css({
            zIndex: -1
        });

    });
    $('.navbar-sec').on('click', function(e) {
        e.stopPropagation();
    });

	$('.has-child-menu').on('click', function(e) {
		// e.preventDefault();
		$(this).parent().css({
			left: '-30px',
			opacity: 1,
			visibility: 'hidden'
		});
		$('.sub-menu', this).addClass('menu-active');
		$('.back').on('click', function(e) {
			$(this).closest('.sub-menu').removeClass('menu-active');
            e.stopPropagation();
            $('.has-child-menu').parent().css({
                left: 0,
                opacity: 1,
                visibility: 'visible'
            });
		});

	});

    //======================
    // Preloder
    //======================
    $(window).on('load', function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(500).css({'overflow':'visible'});
    });


	//======================
    // Counterup
    //======================
    if ($(".counter").length > 0) {
        $('.counter').each(function() {
            var $this = $(this),
            countTo = $this.attr('data-count');
          
            $({ countNum: $this.text()}).animate({
                countNum: countTo
            },

            {
                duration: 8000,
                easing:'linear',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                  $this.append("<i>+</i>");
                  //alert('finished');
                }
            }); 
        });
    }
    
    //========================
    // Slider carousel
    //========================
    if ($(".banner-caro").length > 0) {
        $(".banner-caro").owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'flipInX',
            autoplay: true,
            loop: true,
            items: 1,
            dots: true
        });
    } 


    //========================
    // Project carousel
    //========================
    if ($(".project-caro").length > 0) {
        $(".project-caro").owlCarousel({
            loop: true,
            items: 1,
            nav: true,
            navText: ['<span><img src="images/p-arrow-left.png" alt=""></span>', '<span><img src="images/p-arrow-right.png" alt=""></span>']
        });
    }    

    
    //========================
    // Testiomonial carousel
    //========================
    if ($(".testimonial-caro").length > 0) {
        $('.testimonial-caro').owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            items: 1,
            smartSpeed: 500,
            thumbs: true,
            thumbsPrerendered: true
        });
    }


    //================================
    // Sticky header
    //================================
    $(window).on('scroll', function() {
        var offset = $(this).scrollTop();
        if (offset > 100) {
            $('.header-sec').addClass('sticky-header');
        } else {
            $('.header-sec').removeClass('sticky-header');
        }
    });


    //===================================================
    // Scroll each section on button (scroll-down) click
    //===================================================
    var section = $('.header-sec');
    $('.scroll-down').on('click', function(e){
        e.preventDefault();

        if (section.is('section:last')) {
            section =  $('.header-sec');
            return;
        }
        section = section.next();
        scroll();
    });

    function scroll() {
        $('html, body').animate({ scrollTop: (section.offset().top)},500);    
    }


    //=================================
    // Adding back button for sub-menu
    //=================================    
    $('.navbar-sec li.has-child-menu').children('.sub-menu').prepend('<a href="javascript:void(0)" class="back"><i class="fas fa-chevron-left"></i></a>');



    //=================================
    // Custom scrollbar 
    //================================= 
    $(".news-feed ul").customScrollbar({
        fixedThumbHeight: 80
    });



    $(window).on('scroll', function() {
        var scrolled = $(this).scrollTop();        
        if(scrolled > 100) {
            $('.logo').addClass('active');
        } else {
            $('.logo').removeClass('active');
        }
    })

    $('.share-icon').on('click', function(e) {
        e.preventDefault();
        $('.share').toggleClass('slide-social');
    })


})(jQuery);

