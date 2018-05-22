$('.js-burger').on('click', function() {
  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $('.js-menu').removeClass('is-open');
    $('.out').removeClass('is-hidden');
  } else {
    $(this).addClass('is-active');
    $('.js-menu').addClass('is-open');
    $('.out').addClass('is-hidden');
  }
});
