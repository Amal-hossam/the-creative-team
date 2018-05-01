/*change the time that taken when slideshow moved */





$(document).ready(function () {
   // make nicescroll
    $("Html").niceScroll();  

    $(".carousel").carousel({
        interval: 2500
    });
    //to show tool box

    $(".gear-check").click(function () {
        $(".color-box").toggle();
    });

    //change theme color on click
    var colorLi = $(".color-box ul li");

    colorLi
        .eq(0).css("backgroundColor", "#c60808").end()
        .eq(1).css("backgroundColor", "#b37505").end()
        .eq(2).css("backgroundColor", "#27b205").end()
        .eq(3).css("backgroundColor", "#0895D1").end()
        .eq(4).css("backgroundColor", "#e3c423").end()
        .eq(5).css("backgroundColor", "#a874cf").end()


    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));


    });



    //chaching the scroll top element
    var scrollButton = $("#scroll-top");

    $(window).scroll(function () {

        $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide();
    });

    //click on button to scroll top
    scrollButton.click(function () {

        $("html,body").animate({
            scrollTop: 0
        }, 700)
    });


});

//loading Element
$(window).on('load', function () {

    $("body").css("overflow", "auto");

    $(".loading-overlay .sk-folding-cube").fadeOut(5000,
        function () {
            $("body").css("overflow", "auto");
            $(this).parent().fadeOut(5000,
                function () {
                    $("this").removed();

                });
        });


});
// adding map
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
