/* update */
let update = document.querySelector('.update_inner');
window.addEventListener('scroll', function(){
  let scrollAmount = document.documentElement.scrollTop; //지역변수
  console.log(scrollAmount);
  if(scrollAmount>1100){
    update.classList.add('up3');
  }else{
    update.classList.remove('up3');
  }
});

/* adopt */
let adopt = document.querySelector('.adopt_inner');
window.addEventListener('scroll', function(){
  let scrollAmount = document.documentElement.scrollTop; //지역변수
  console.log(scrollAmount);
  if(scrollAmount>1750){
    adopt.classList.add('up2');
  }else{
    adopt.classList.remove('up2');
  }
});


/* notify */
let notify = document.querySelector('.notify_inner');
window.addEventListener('scroll', function(){
  let scrollAmount = document.documentElement.scrollTop; //지역변수
  console.log(scrollAmount);
  if(scrollAmount>2400){
    notify.classList.add('up3');
  }else{
    notify.classList.remove('up3');
  }
});


/* quickmenu */
let btn = document.querySelector('#gototop');
let btn2 = document.querySelector('#customerSenter');
window.addEventListener('scroll', function(){
  let scrollAmount = document.documentElement.scrollTop; //지역변수
  console.log(scrollAmount);
  if(scrollAmount>400){
    btn.classList.add('visible');
    btn2.classList.add('visible2');
  }else{
    btn.classList.remove('visible');
    btn2.classList.remove('visible2');
  }
});


//클릭이벤트추가
btn.addEventListener('click', function(e) {
  e.preventDefault(); // 기본 동작을 막습니다.
  // 화면의 상단으로 스크롤합니다.
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // 부드러운 스크롤 동작을 적용합니다.
  });
});

if (window.matchMedia("(min-width: 100px)").matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}

/*modal*/
const login = document.getElementById('login');
const login2 = document.getElementById('login2');
const modal = document.getElementsByClassName('login_modal')[0];
const closeBtn = document.getElementById('closeBtn');
const modalBg = document.querySelector('.modal_bg');

login.addEventListener('click', function(){
  modal.classList.add('clickModal');
  modalBg.classList.add('clickBg');
});

login2.addEventListener('click', function(){
  modal.classList.add('clickModal');
  modalBg.classList.add('clickBg');
});

closeBtn.addEventListener('click', function(){
  modal.classList.remove('clickModal');
  modalBg.classList.remove('clickBg');
});

