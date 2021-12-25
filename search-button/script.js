jQuery(document).ready(function ($) {

    var searchActive = false;
    var searchDesk = $('.searchbar-desk .search-icon');
    var searchDeskForm = $('.searchbar-desk .search-form');
    var searchDeskInput = searchDeskForm.find('input');
    var searchDeskClose = $('.searchbar-desk .form-close');

    searchDesk.click(function(event) {
        
        event.preventDefault();
        
        if(searchActive) {
            window.location.replace(window.location.origin + "?s=" + searchDeskInput.val());
        } else {
            toggleSearch();
        }

    });

    searchDeskClose.click(function(event) {
        event.preventDefault();

        toggleSearch();

        searchDeskInput.val('');
    });

    searchDeskInput.keypress(function(e){
        if(e.keyCode==13)
        searchDesk.click();
      });


    function toggleSearch() {
        searchActive = !searchActive;
        
        if (searchActive) {
            searchDeskForm.removeClass("vishid").removeClass("hidden-search");
        } else {
            searchDeskForm.addClass("vishid").addClass("hidden-search");
        }

    }

});

