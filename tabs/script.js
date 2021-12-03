jQuery(document).ready(function ($) {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation class
                entry.target.classList.remove('start-transition');
            } else {
                entry.target.classList.add('start-transition');
            }
        });
    });

    const startAnimationElements = document.querySelectorAll('.progress-25 > .start-transition');
    startAnimationElements.forEach((el) => {
        observer.observe(el);
    });

});