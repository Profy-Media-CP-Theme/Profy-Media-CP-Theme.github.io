jQuery(document).ready(function ($) {

    var elements26 = [].slice.call(document.querySelectorAll('.element-26'));
    
    elements26.forEach(element => {
        var triggerBtnList = [].slice.call(document.querySelectorAll("#" + element.id + "-dots-26 > div.dot-26"));
        var triggerImgList = [].slice.call(document.querySelectorAll("#" + element.id + "-imgs-26 > img.img-26"));
        var slider26 = document.querySelector("#" + element.id + "-imgs-26");
        
        triggerBtnList.forEach((triggerEl, index) => {
            triggerEl.addEventListener('click', function(event) {
                event.preventDefault();

                slider26.scrollTo({behavior: 'smooth', left: triggerImgList[index].offsetLeft - triggerImgList[0].offsetLeft});
            });
    
        });
    });

});