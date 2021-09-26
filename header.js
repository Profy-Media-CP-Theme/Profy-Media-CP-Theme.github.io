
$('.dropdown-menu a.drop-toggle').on('mouseover', function(e) {
    var togid = $(this).attr('id');
    var child = $(".orange-dropdown#" + togid).first();
    
    if (!child.hasClass('show')) {
                  $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
                              $(this).parents('.dropdown-menu').first().find('a.a-selected').removeClass('a-selected');
              }
    child.addClass("show");
    $(this).addClass("a-selected")	
    
    $(this).parents('li.nav-item.dropdown').on('hidden.bs.dropdown', function (e) {
                  $('.orange-dropdown').removeClass('show');
                  $('.a-selected').removeClass('a-selected');
              });
    
  })
  
//   $('li.nav-item.dropdown > .dropdown-menu').on('mouseleave', function(e) {
//        $(this).find(".show").removeClass('show');
//        $(this).removeClass('show');
//        $(this).parents('li.nav-item.dropdown').first().trigger('hide.bs.dropdown');
//        $(this).parents('li.nav-item.dropdown').first().trigger('hidden.bs.dropdown');
//   })



//   $('.dropdown-menu a.drop-toggle').on('click', function (e) {
//     var togid = $(this).attr('id');
//     var child = $(".orange-dropdown#" + togid).first();

//     if (!child.hasClass('show')) {
//         $(this).parents('.dropdown-menu').first().find('.show').removeClass('show');
//     }

//     child.toggleClass("show");

//     $(this).parents('li.nav-item.dropdown').on('hidden.bs.dropdown', function (e) {
//         $('.orange-dropdown').removeClass('show');
//     });

//     return false;
// })