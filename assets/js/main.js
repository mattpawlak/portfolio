(function($) {

    "use strict";

	/* ---------------------------------------------------
        1 - Adjust Loading Page
	----------------------------------------------------- */
    $(window).on("load", function () {
        $(".preloader .item-wrapper").delay(700).animate({
            top: "-100%"
        }, 1000, "easeInQuart");
        $(".preloader").delay(1100).fadeOut(1500);
    });

    /* ----------------------------------------------------------
        2 - Make Header takes the Full Height of the window
    ------------------------------------------------------------ */
    var homeSec = $("#home");
    homeSec.height($(window).height());

    $(window).on("resize", function() {
        homeSec.height($(window).height());
    });

    /* ---------------------------------------------------
        3 - Sticky Menu
    ----------------------------------------------------- */
    $(".header-area").sticky({topSpacing:0});

    /* ---------------------------------------------------
        4 - About Section Skill Bars
    ----------------------------------------------------- */
    $(".about-me").appear(function () {
        $(".skillbar").skillBars();
    }, {
        accX: 0,
        accY: -350
    });

    /* ---------------------------------------------------
        5 - Hide menu after clicking on a link
    ----------------------------------------------------- */
    $("ul.nav li a").on("click", function () {
        $("#myNavbar").collapse("hide");
    });

    /* ---------------------------------------------------
        6 - Jquery Smooth Scroll
    ----------------------------------------------------- */
    $("li.smooth-menu > a").on("click", function (event) {
        var $anchor = $(this);
        var headerH = '56';
        $("html, body").stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1200, 'easeInOutExpo');

        event.preventDefault();
    });

    /* ---------------------------------------------------
        7 - jquery scroll spy
    ----------------------------------------------------- */
    $(window).on("scroll", function () {
        $("body").scrollspy({
            target: '.navbar-collapse',
            offset: 94
        });
    });

    /* ---------------------------------------------------
        8 - Parallax Effect
    ----------------------------------------------------- */
    var parallaxHome 	    = $("#home.parallax"),
        parallaxFacts 	    = $("#fun-facts.parallax"),
        parallaxPromo 	    = $("#promo.parallax"),
        parallaxclient 	    = $("#client.parallax");
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        parallaxHome.css({"background-attachment": "scroll"});
        parallaxFacts.css({"background-attachment": "scroll"});
        parallaxPromo.css({"background-attachment": "scroll"});
        parallaxclient.css({"background-attachment": "scroll"});
    } else {
        parallaxHome.parallax("50%", 0.3);
        parallaxFacts.parallax("50%", 0.18);
        parallaxPromo.parallax("50%", 0.15);
        parallaxclient.parallax("50%", 0.15);
    }
    /* ---------------------------------------------------
        9 - Start Isotop Plugin in Portfolio Section
    ----------------------------------------------------- */
    $('#container').imagesLoaded( function() {
        //active isotop js
        $('.portfolio-items').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.grid-item'
            }
        });

        //isoptop click function
        $("ul.portfolio-filter > li").on("click", function () {
            $("ul.portfolio-filter > li").removeClass("active");
            $(this).addClass("active");

            var selector = $(this).attr("data-filter");
            $(".portfolio-items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: true
                }
            });

            return false;
        });
    });


    /* ---------------------------------------------------
        10 - Start Owl Carousel Plugin in Client Section
    ----------------------------------------------------- */
    $(".client-group").owlCarousel({
        navigation: false,
        autoPlay: 3000,
        slideSpeed: 1500,
        pagination: true,
        paginationSpeed: 1500,
        singleItem: true
    });

    /* ---------------------------------------------------
        11 - Typed Text in Home Section
	----------------------------------------------------- */
	$(".typed-element").typed({
    	strings: ["i'm matt", "i'm web developer", "live in poland"],
    	typeSpeed: 38,
    	loop: true,
    	backDelay: 3000
    });

})(jQuery);
