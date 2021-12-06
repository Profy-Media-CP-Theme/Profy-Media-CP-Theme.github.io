jQuery(document).ready(function ($) {

    var elements23 = [].slice.call($(".element-23"));

    elements23.forEach(element => {

        trig23 = true;

        $(window).scroll(function () {
            if (trig23) {
                if ($(window).scrollTop() > $('#'+element.id).offset().top) {
                    trig23 = false;
                    doit(element.id);
                }
            }

        });

    });

    function doit(id) {

        var x23 = $('#'+id).addClass("start-23");

        $('#' + id + '.element-23 img').css({
            "transition": "1s",
        });
    
        setTimeout(function () {
    
            jQuery('#' + id + ' .extratext-23').css("display", "none");
            jQuery('#' + id + '.element-23 .right-23 img').css("display", 'initial');
            jQuery('#' + id + ' .text-23').css("transition", "1s");
    
            setTimeout(function () {
                x23.addClass("transform-23");
            }, 100);
    
        }, 700);
    }

});
