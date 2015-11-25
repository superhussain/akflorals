(function ($) {
  jQuery(document).ready(function ($) {
    contactForm();
    carousel();
    hamburger();
  });
})(jQuery);

contactForm = function () {
  $("#contact-submit").on('click', function () {
    $contact_form = $('#contact-form');
    var fields = $contact_form.serialize();
    $.ajax({
      type: "POST",
      url: "js/contact.php",
      data: fields,
      dataType: 'json',
      success: function (response) {
        if (response.status) {
          $('#contact-form input').val('');
          $('#contact-form textarea').val('');
        }
        $('#response').empty().html(response.html);
      }
    });
    return false;
  });
}

carousel = function() {
  $('#carousel').owlCarousel({
    navigation: true, // Show next and prev buttons
    autoPlay: 7000,
    stopOnHover: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    transitionStyle: "fadeUp"
  })
}

hamburger = function() {
  $('.hamburger-menu').on('click', function() {
    $('.bar').toggleClass('animate');
    $('nav ul').slideToggle('slow');
  })
}

