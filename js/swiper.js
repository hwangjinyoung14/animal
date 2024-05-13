/* update */
let swiper = new Swiper(".update_swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop:true,
  initialSlide: 0, // 첫 번째 슬라이드가 활성화되도록 설정
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    init: function () {
      let slides = document.querySelectorAll(".update_swiper .swiper-slide");
      slides.forEach((slide, index) => {
        if (index !== 0) { // 첫 번째 슬라이드를 제외하고 투명도 설정
          slide.style.opacity = "0.5";
        }
      });
    },
    slideChangeTransitionEnd: function () {
      let activeIndex = swiper.activeIndex;
      let slides = document.querySelectorAll(".update_swiper .swiper-slide");
      slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.style.opacity = "1";
        } else {
          slide.style.opacity = "0.5";
        }
      });
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// 리스트 아이템과 슬라이드 연결
const listItems = document.querySelectorAll('.update_list li');
listItems.forEach((item, index) => {
  item.addEventListener('click', function () {
    listItems.forEach(item => {
      item.querySelector('a').style.color = '';
    });
    item.querySelector('a').style.color = '#625DF8';
    swiper.slideTo(index);
  });
}); 

/* adopt */
let swiper2 = new Swiper(".adopt_swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  breakpoints: {
    200: {
      slidesPerView: 1,  //브라우저가 768보다 클 때
      spaceBetween: 0,
    },
    400: {
      slidesPerView: 2,  //브라우저가 768보다 클 때
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1920: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

if (window.matchMedia("(min-width: 100px)").matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}