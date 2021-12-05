jQuery(document).ready(function ($) {

    const timeInterval = 4000;

    var elements26 = [].slice.call(document.querySelectorAll('.element-26'));

    elements26.forEach(element => {
        var triggerBtnList = [].slice.call(document.querySelectorAll("#" + element.id + "-dots-26 > div.dot-26"));
        var triggerImgList = [].slice.call(document.querySelectorAll("#" + element.id + "-imgs-26 > img.img-26"));
        var staticImgList = [].slice.call(document.querySelectorAll("#" + element.id + "-static-26 > img.still-img-26"));
        var slider26 = document.querySelector("#" + element.id + "-imgs-26");
        var pause26 = document.querySelector("#" + element.id + "-pause-26");
        var selected = 0;
        var maxItems = triggerBtnList.length;
        var timeout;
        var timeoutPause = false;

        triggerBtnList.forEach((triggerEl, index) => {
            triggerEl.addEventListener('click', function (event) {
                event.preventDefault();
                selected = index;
                scrollImg26();
            });

        });

        pause26.addEventListener('click', function () {
            timeoutToggle();
            for (i = 0; i < pause26.childElementCount; i++) {
                if (pause26.children[i].classList.contains('d-none')) {
                    pause26.children[i].classList.remove('d-none');
                }
                else {
                    pause26.children[i].classList.add('d-none');
                }
            }
        });

        function scrollImg26() {
            slider26.scrollTo({ behavior: 'smooth', left: triggerImgList[selected].offsetLeft - triggerImgList[0].offsetLeft });

            staticImgList.forEach((img, index) => {
                if (index == selected) {
                    img.classList.add("active-26");
                } else {
                    img.classList.remove("active-26");
                }
            });
            timeoutHandler();
        }

        timeoutHandler();

        function timeoutHandler() {
            clearTimeout(timeout);
            if (!timeoutPause) {
                timeout = setTimeout(function () {
                    selected = (selected + 1) % maxItems;
                    scrollImg26(selected);
                }, timeInterval);
            }
        }

        function timeoutToggle() {
            timeoutPause = !timeoutPause;
            timeoutHandler();
        }

    });


});