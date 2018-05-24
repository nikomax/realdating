import './components/menu';
import firstAnimation from './components/test';
import secondAnimation from './components/test_3';
import thirdAnimation from './components/test2_4_to_check';
import fourthAnimation from './components/test_4-script_test';

secondAnimation();

var windowTop = 0;
var windowHeight = $(window).height();
var vuePos;

let qq = true;
let ee = true;
let rr = true;

$(window).scroll(function() {
  windowTop = $(this).scrollTop();
  vuePos = windowTop + windowHeight/2;
  if (vuePos > $('#fourthAnimation').offset().top) {
    if(rr) {
      fourthAnimation();
      rr = false;
    }
  } else if (vuePos > $('#thirdAnimation').offset().top) {
    if(qq) {
      thirdAnimation();
      qq = false;
    }
  } else if (vuePos > $('#firstAnimation').offset().top) {
    if (ee) {
      firstAnimation();
      ee = false;
    }
  }
});

