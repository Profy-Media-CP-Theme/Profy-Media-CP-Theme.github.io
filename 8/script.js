jQuery(document).ready(function ($) {


    var triggerBtnList = [].slice.call(document.querySelectorAll("#v-pills-tab button"));
    var triggerImgList = [].slice.call(document.querySelectorAll("#v-pills-img div"));
    triggerBtnList.forEach((triggerEl, index) => {
        var tabTrigger = new bootstrap.Tab(triggerEl);

        triggerImgList[index].addEventListener('click', function (event) {
            event.preventDefault();
            tabTrigger.show();
        });

    });

    // bootstrap.Tab.getInstance(triggerTabList[0]).show();

});
