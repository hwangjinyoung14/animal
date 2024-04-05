
let nav = document.querySelector('nav');
let trigger = document.querySelector('.trigger');
let span = document.querySelectorAll('.trigger span');
let tab = document.querySelector('.tab');

/* trigger */
trigger.addEventListener('click', function(){
  nav.style.overflow = 'hidden';
  for(let i=0; i<span.length; i++){
    span[i].style.backgroundColor = '#111';
  }
  trigger.classList.remove('active');
  trigger.style.backgroundColor = 'white';
});

/* trigger2 */
let trigger2 = document.getElementsByClassName('trigger2')[0],
    list = document.querySelector('#list');
    myInfo = document.querySelector('.mobile_login');
    console.log(list);
trigger2.addEventListener('click', function(){
  this.classList.toggle('active1');
  list.classList.toggle('veiw');
  myInfo.classList.toggle('veiw2');
});


/*nav mouseover*/
nav.addEventListener('mouseover', function(){
  this.style.overflow = 'visible';
  for(let i=0; i<span.length; i++){
    span[i].style.backgroundColor = 'white';
  }
  trigger.classList.add('active');
  trigger.style.backgroundColor = 'var(--point-color)';
});

nav.addEventListener('mouseout', function(){
  this.style.overflow = 'hidden';
  for(let i=0; i<span.length; i++){
    span[i].style.backgroundColor = '#111';
  }
  trigger.classList.remove('active');
  trigger.style.backgroundColor = 'white';
});


/*서브메뉴 a태그*/
let listA = document.querySelectorAll('.sub_menu>a')
for(let i=0; i<listA.length; i++){
  listA[i].addEventListener('mouseover', function(){
    this.style.color = 'var(--point-color)';
    this.style.fontWeight = '600';
  });
  listA[i].addEventListener('mouseout', function(){
    this.style.color = '';
    this.style.fontWeight = ''
  });
}

/*반응형 nav 아코디언*/
document.addEventListener("DOMContentLoaded", function() {
  let menuLinks = document.querySelectorAll("#list > li > a");

  menuLinks.forEach(function(link) {
    link.addEventListener("click", function() {
      let subMenu = this.nextElementSibling;

      // 현재 링크의 인접한 서브메뉴의 높이값을 계산하여 설정
      if (!subMenu.style.maxHeight || subMenu.style.maxHeight === "0px") {
        // 서브메뉴가 현재 숨겨져 있다면 보이게
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      } else {
        // 서브메뉴가 현재 보이고 있다면 숨기게
        subMenu.style.maxHeight = "0";
      }

      // 다른 링크의 서브메뉴를 숨김
      menuLinks.forEach(function(otherLink) {
        if (otherLink !== link) {
          otherLink.nextElementSibling.style.maxHeight = "0";
        }
      });
    });
  });
});

/* placeholder */
let inputEle = document.querySelector('.search>input');
inputEle.addEventListener('focus', function(){
  this.placeholder='';
});

inputEle.addEventListener('blur', function(){
  this.placeholder='|  동물등록하기는 어떻게 하나요?';
});


/*tab*/
let contentDiv = document.querySelectorAll('.tab_content > div');
contentDiv.forEach(function(div){
  div.style.display = 'none';
});
document.getElementById('tabmenu1').style.display = 'block';

let titleLink = document.querySelectorAll('.title a');
titleLink.forEach(function(link){
  link.addEventListener('click', function(e){
    let tab = this.getAttribute('href')
    contentDiv.forEach(function(div){
      div.style.display='none';
      e.preventDefault();
    });
    document.querySelector(tab).style.display='block';
    titleLink.forEach(function(link){
      link.classList.remove('on')
    });
      this.classList.add('on');
  })
})

/* tab 스크롤 내렸을 때 올라오게 하기*/
// const relativeTop = tab.getBoundingClientRect().top;
// const absoluteTop = window.pageYOffset + relativeTop;
// console.log(absoluteTop); //1581 얘가 스크롤 위치값은 700인디.. 너무 큼 상대적으로 구하면 안되는 건가용 > 실제값과 화면의 길이는 차이가 있음. 그래서 -500해준 것임
const clientRect = tab.getBoundingClientRect(); 
const relativeTop = clientRect.top; 
console.log(relativeTop); //뷰포트값 구하는 공식

window.addEventListener('scroll', function(){
  let scrollAmount = document.documentElement.scrollTop; //지역변수
  console.log(scrollAmount);
  if(scrollAmount>400){
    tab.classList.add('up');
  }else{
    tab.classList.remove('up');
  }
});

if (window.matchMedia("(min-width: 100px)").matches) {
  /* 뷰포트 너비가 400 픽셀 이상 */
} else {
  /* 뷰포트 너비가 400 픽셀 미만 */
}
