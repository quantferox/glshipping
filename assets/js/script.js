$(document).ready(function () {
    /* SHOW NAVBARS MENU - START */
    if ($(".navbar").length > 0) {
        $("#navbar_menu_show").click(function () {
            $(".navbar__menu").fadeIn();
        });
        $("#navbar_menu_close").click(function () {
            $(".navbar__menu").fadeOut();
        });
        $(window).scroll(function () {
            if ($(".navbar__menu").is(":visible")) {
                $(".navbar__menu").fadeOut();
            }
        });
    }
    /* SHOW NAVBARS MENU - ENDED */

    /* ABOUT US DATA COUNTER - START */
    if ($("[data-counter]").length > 0) {
        $("[data-counter]").each(function () {
            $(this).counterUp({
                delay: 16,
                time: 2048
            });
        });
    }
    /* ABOUT US DATA COUNTER - ENDED */

    /* PARTNERS CAROUSEL - START */
    if ($("#partners_carousel_i").length > 0) {
        $("#partners_carousel_i").owlCarousel({
            items: 6,
            loop: true,
            margin: 10,
            center: true,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 1024,
            smartSpeed: 512,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 6,
                }
            }
        });
    }

    if ($("#partners_carousel_ii").length > 0) {
        $("#partners_carousel_ii").owlCarousel({
            items: 6,
            loop: true,
            margin: 10,
            center: false,
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 3072,
            smartSpeed: 512,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2,
                },
                768: {
                    items: 4,
                },
                1200: {
                    items: 6,
                }
            }
        });
    }
    /* PARTNERS CAROUSEL - ENDED */

    /* CERT FANCYBOX IMG - START */
    if ($("[data-fancybox]").length > 0) {
        Fancybox.bind("[data-fancybox]", {
            loop: true,
        });
    }
    /* CERT FANCYBOX IMG - ENDED */
});