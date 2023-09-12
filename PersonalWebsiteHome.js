$(window).resize(function() {
    if ($(window).width() < 992) { 
        console.log("grow")
        $(".section-about-me").css("height", "140vh");
    } else {
        $(".section-about-me").css("height", "100vh");
    }
});
$(window).resize(function() {
    if ($(window).width() < 992) { 
        $(".section-about-me").css("height", "140vh");
    } else {
        $(".section-about-me").css("height", "100vh");
    }
});
$(window).resize(function() {
    if ($(window).width() < 1800) { 
        $(".section-projects").css("height", "300vh");
    } else {
        $(".section-projects").css("height", "185vh");
    }
});
$(window).resize(function() {
    if ($(window).width() < 1100) { 
        $("#splendor-cover").css("display", "none");
        $("#splendor-text").css("flex-basis", "100%");

    } else {
        $("#splendor-cover").css("display", "inline");
        $("#splendor-text").css("flex-basis", "50%");
    }
});