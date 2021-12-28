jQuery(document).ready(function ($) {

    var owl = $(".owl-carousel");

    owl.owlCarousel({

        loop: true,
        items: 1,
        center: true,
        autoplayTimeout: 5000,
        autoplay: false,
        nav: true,
        lazyLoad: true,
        lazyLoadEager: 1,
        navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
        
        onTranslate: translateCb,
        onInitialized: startFirst,
        

    });

    var contents;
    var virtualContents;
    var currentSlide = 0;

    function translateCb(event) {
        index = event.page.index;
        virtualIndex = event.item.index;
        translationHandler(index, virtualIndex);
    }

    function translationHandler(index, virtualIndex = -1) {
        currentSlide = index;
        current = contents[index];
        if (virtualIndex != -1) {
            current = virtualContents[virtualIndex];
        }
        if (current.tagName == "VIDEO") {
            owl.trigger("stop.owl.autoplay");
            current.currentTime = '0';
            current.play().catch(error=>{});
            owl.one("translate.owl.carousel", (event) => {
                if (event.page.index !== index) {
                    current.pause();
                    current.currentTime = '0';
                }
            });
            current.addEventListener('ended', (event) => {
                if (currentSlide === index) {
                    nextSlide();
                }
            }, {"once": true,});
        } else {
            owl.trigger("play.owl.autoplay");
        }
    }

    function nextSlide() {
        owl.trigger("next.owl.carousel");
    }

    function startFirst() {
        contents = jQuery(".owl-carousel .owl-item:not(.cloned) .carousel-content");
        virtualContents = jQuery(".owl-carousel .owl-item .carousel-content");
        translationHandler(0);
    }
    
});