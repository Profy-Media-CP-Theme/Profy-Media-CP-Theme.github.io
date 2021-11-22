jQuery(document).ready(function ($) {

    var elements24 = [].slice.call(document.querySelectorAll('.visual-24'));
    var eled24 = {};

    elements24.forEach(element => {
        eled24[element.id] = {};
        eled24[element.id]['top'] = element.offsetTop;
        eled24[element.id]['bot'] = element.offsetTop + element.offsetHeight - visualViewport.height;
        eled24[element.id]['pos'] = -1;
        checker24(element);
    });

    $(window).scroll(function () {
        elements24.forEach(el => {
            checker24(el);
        });
    });


    function checker24(el) {
        if (window.pageYOffset <= eled24[el.id]['top']) {
            if (eled24[el.id]['pos'] != 0) {
                eled24[el.id]['pos'] = 0;
                before24(el);
            }
        } else if (window.pageYOffset >= eled24[el.id]['bot']) {
            if (eled24[el.id]['pos'] != 2) {
                eled24[el.id]['pos'] = 2;
                after24(el);
            }
        } else {
            if (eled24[el.id]['pos'] != 1) {
                eled24[el.id]['pos'] = 1;
                in24(el);

            }
        }
    }

    function before24(el) {
        el.classList.remove('after24');
        el.classList.remove('in24');
        el.classList.add('before24');
    }

    function in24(el) {
        el.classList.remove('after24');
        el.classList.remove('before24');
        el.classList.add('in24');
    }

    function after24(el) {
        el.classList.remove('before24');
        el.classList.remove('in24');
        el.classList.add('after24');
    }


});
