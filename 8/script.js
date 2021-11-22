jQuery(document).ready(function ($) {

    var elements8 = [].slice.call(document.querySelectorAll('.element-8'));
    
    elements8.forEach(element => {
        var triggerBtnList = [].slice.call(document.querySelectorAll("#v-pills-tab-" + element.id + " button"));
        var triggerImgList = [].slice.call(document.querySelectorAll("#v-pills-img-" + element.id + " div"));
        
        triggerBtnList.forEach((triggerEl, index) => {
            var tabTrigger = new bootstrap.Tab(triggerEl);
    
            triggerImgList[index].addEventListener('click', function (event) {
                event.preventDefault();
                tabTrigger.show();
            });
    
        });
    });

});
