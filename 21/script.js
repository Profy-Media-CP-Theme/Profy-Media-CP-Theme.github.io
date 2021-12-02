jQuery(document).ready(function ($) {

    var elements20 = [].slice.call(document.querySelectorAll('.element-21'));
    
    elements20.forEach(element => {
        var triggerBtnList = [].slice.call(document.querySelectorAll("#h-pills-tabs-21-" + element.id + " button"));
        var triggerImgList = [].slice.call(document.querySelectorAll("#big-21-" + element.id + " div.dot-21"));

        triggerBtnList.forEach((triggerEl, index) => {
            var tabTrigger = new bootstrap.Tab(triggerEl);
    
            triggerEl.addEventListener('click', function(event) {
                triggerImgList.forEach((triggerImg, indexImg) => {
                    if (index != indexImg) {
                        triggerImg.classList.add("filtered");
                    } else {
                        triggerImg.classList.remove("filtered");
                    }
                });
            });

            triggerImgList[index].addEventListener('click', function (event) {
                event.preventDefault();
                tabTrigger.show();

                triggerImgList.forEach((triggerImg, indexImg) => {
                    if (index != indexImg) {
                        triggerImg.classList.add("filtered");
                    } else {
                        triggerImg.classList.remove("filtered");
                    }
                });
            });

            if (index == 0) {
                tabTrigger.show();
                triggerImgList[0].classList.remove("filtered");
            }
    
        });
    });
    

});

