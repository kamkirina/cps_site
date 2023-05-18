/* Swiper
 **************************************************************/
var swiper = Swiper;
var init = false;

/* Which media query
 **************************************************************/
function swiperMode() {
  let mobile = window.matchMedia("(min-width: 0px) and (max-width: 767px)");

  // Enable (for mobile)
  if (mobile.matches) {
    if (!init) {
      init = true;
      swiper = new Swiper(".swiper", {
        // Optional parameters
        direction: "horizontal",
        loop: true,

        // If we need pagination
        pagination: {
          el: ".swiper-pagination",
        },
      });
    }
  }

  // Disable
  else {
    swiper.distroy;
    init = false;
  }
}

/* On Load
 **************************************************************/
window.addEventListener("load", function () {
  swiperMode();
});

/* On Resize
 **************************************************************/
window.addEventListener("resize", function () {
  swiperMode();
});

//  show more/ hide
const showDesktop = document.querySelector(".slider__show");
const showTablet = document.querySelector(".slider__show-tablet");
const hideButton = document.querySelector(".slider__hide");
const container = document.querySelector(".swiper");

showDesktop.addEventListener("click", function (event) {
  container.classList.add("swiper--open");
  showDesktop.classList.add("slider__show--disable");
  hideButton.classList.add("slider__hide--active");
});

showTablet.addEventListener("click", function (event) {
  container.classList.add("swiper--open");
  showTablet.classList.add("slider__show-tablet--disable");
  hideButton.classList.add("slider__hide--active");
});

hideButton.addEventListener("click", function (event) {
  container.classList.remove("swiper--open");
  showDesktop.classList.remove("slider__show--disable");
  hideButton.classList.remove("slider__hide--active");
  showTablet.classList.remove("slider__show-tablet--disable");
});
