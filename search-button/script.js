jQuery(document).ready(function ($) {

    var searchActive = false;
    var searchDesk = $('.searchbar-desk .search-icon');
    var searchDeskInput = $('.searchbar-desk .search-input');

    searchDesk.click(function(event) {
        
        if(!searchActive) {
            event.preventDefault();
        }

        searchActive = !searchActive;
        
        if (searchActive) {
            searchDeskInput.removeClass("hidden-search");
        } else {
            searchDeskInput.addClass("hidden-search");
        }


    });


    function refreshSearch() {
        if (searchActive) {

        }
    }

});

