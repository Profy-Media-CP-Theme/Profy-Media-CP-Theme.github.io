jQuery(document).ready(function ($) {

    const timeInterval = 4000;

    var elements26 = [].slice.call(document.querySelectorAll('.element-26'));
    
    elements26.forEach(element => {
        var triggerBtnList = [].slice.call(document.querySelectorAll("#" + element.id + "-dots-26 > div.dot-26"));
        var triggerImgList = [].slice.call(document.querySelectorAll("#" + element.id + "-imgs-26 > img.img-26"));
        var staticImgList = [].slice.call(document.querySelectorAll("#" + element.id + "-static-26 > img.still-img-26"));
        var slider26 = document.querySelector("#" + element.id + "-imgs-26");
        var selected = 0;
        var maxItems = triggerBtnList.length;
        var timeout;

        triggerBtnList.forEach((triggerEl, index) => {
            triggerEl.addEventListener('click', function(event) {
                event.preventDefault();
                selected = index;
                scrollImg26();
            });

        });

        function scrollImg26() {
            slider26.scrollTo({behavior: 'smooth', left: triggerImgList[selected].offsetLeft - triggerImgList[0].offsetLeft});
            
            staticImgList.forEach((img, index) => {
                if(index == selected) {
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
            timeout = setTimeout(function() {
                selected = (selected + 1) % maxItems;
                scrollImg26(selected);
            }, timeInterval);
        }

    });


});