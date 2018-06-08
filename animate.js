(function($) {

    var navbar = $(".nav-link"),
        h1 = $("h1"),
        email = $(".email"),
        socialIcons = $(".fab"),
        col1 = $("#col1"),
        col2 = $("#col2"),
        col3 = $("#col3"),
        col4 = $("#col4"),
        col5 = $("#col5"),
        col6 = $("#col6"),
        footer = $(".footer"),
        container = $("#mainContainer");

        TweenLite.from(container, 0.5, {autoAlpha:0, ease:Power1.easeOut, delay: 1.0});
    
        TweenLite.from(navbar, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 1.0});
        TweenLite.from(h1, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 2.0});
        TweenLite.from(email, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 3.0});
        TweenLite.from(socialIcons, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 4.0});
    
        TweenLite.from(col1, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 4.5});
        TweenLite.from(col2, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 5.0});
        TweenLite.from(col3, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 5.5});
        TweenLite.from(col4, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 6.0});
        TweenLite.from(col5, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 6.5});
        TweenLite.from(col6, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 7.0});
    
        TweenLite.from(footer, 1.0, {y: -15, autoAlpha:0, ease:Power1.easeOut, delay: 8.0});
    
    })(jQuery);
