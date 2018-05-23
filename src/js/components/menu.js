var defaultSrc = $('.header__logo').find('.js-mob-logo').attr('src');
var menuSrc = $('.header__logo').find('.js-mob-logo').data('src');
$('.js-burger').on('click', function() {
  if ($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $('.js-menu').removeClass('is-open');
    $('.out').removeClass('is-hidden');
    $('.header__logo').find('.js-mob-logo').attr('src', defaultSrc);
  } else {
    $(this).addClass('is-active');
    $('.js-menu').addClass('is-open');
    $('.out').addClass('is-hidden');
    $('.header__logo').find('.js-mob-logo').attr('src', menuSrc);
  }
});
