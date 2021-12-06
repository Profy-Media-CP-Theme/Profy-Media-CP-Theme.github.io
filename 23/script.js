jQuery(document).ready(function ($) {

    var elements23 = [].slice.call($(".wrapper-23"));

    elements23.forEach(element => {

        trig23 = true;
        grid23 = $("#"+element.id);
        offsetHeight = grid23.offset().top + 0.25*grid23.children().first().outerHeight();
        offsetEnd = grid23.offset().top + 0.8*grid23.children().first().outerHeight();

        $(window).scroll(function () {
            if (trig23) {
                scrollTopVal = $(window).scrollTop();
                if (scrollTopVal > offsetHeight && scrollTopVal < offsetEnd) {
                    trig23 = false;
                    doit(element.id);
                }
            }

        });

    });

    function doit(id) {

        var x23 = $('#'+id + ' > .element-23').addClass("start-23");

        $('#' + id + ' > .element-23 img').css({
            "transition": "1s",
        });
    
        setTimeout(function () {
    
            $('#' + id + ' .extratext-23').css("display", "none");
            $('#' + id + ' .right-23 img').css("display", 'initial');
            $('#' + id + ' .text-23').css("transition", "1s");
    
            setTimeout(function () {
                x23.addClass("transform-23");
            }, 100);
    
        }, 900);
    }

});
