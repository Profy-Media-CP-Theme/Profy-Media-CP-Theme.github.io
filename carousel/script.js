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
    var currentSlide = -1;

    function translateCb(event) {
        index = event.page.index;
        translationHandler(index);
    }

    function translationHandler(index) {
        currentSlide = index;
        console.log('handling: ' + index);
        current = contents[index];
        if (current.tagName == "VIDEO") {
            owl.trigger("stop.owl.autoplay");
            current.pause();
            current.currentTime = '0';
            current.play();
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

    function startFirst(event) {
        contents = jQuery(".owl-carousel .owl-item:not(.cloned) .carousel-content");
        translationHandler(0);
    }
    
});