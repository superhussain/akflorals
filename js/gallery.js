$('#backdrops').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true
});
$('#baskets').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true
});
$('#centerpieces').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true
});
$('#flowers').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true
});
$('#reception').lightGallery({
  thumbnail: true,
  animateThumb: true,
  showThumbByDefault: true
});

$('section.gallery h2').on('click', function () {
  $('.gallery-wrapper').slideUp();
  var attr = $(this).context.dataset.attr;
  var selector = '#' + attr;
  $(selector).slideToggle();
})

