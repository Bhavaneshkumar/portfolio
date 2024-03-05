// wishlist tab
$(document).ready(function () {
    $('#tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('#tabs-nav li').click(function () {
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });
});
// wishlist tab ends

$(document).ready(function() {
    // Set first tab to be active
    $('.filter-buttons li:first-child').addClass('active');
    
    // Filter gallery images
    $('.filter-buttons li').click(function() {
      var filterValue = $(this).attr('data-filter');
      $('.portfolio-column img').each(function() {
        if ($(this).attr('data-filter') === filterValue || filterValue === 'all') {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
      $('.filter-buttons li').removeClass('active');
      $(this).addClass('active');
    });
  });