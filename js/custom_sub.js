let nav = document.querySelector('nav');
let trigger = document.querySelector('.trigger');
let span = document.querySelectorAll('.trigger span');
let tab = document.querySelector('.tab');

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

/*search_btn*/
const searchBtn = document.getElementsByClassName('search_btn')[0];
searchBtn.addEventListener('click', function(e){
  e.preventDefault();
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

/*main_left*/
let sideNavList = document.querySelectorAll('.sideNav_list>li>.list_title');
let sideNavListA = document.querySelectorAll('.sideNav_list>li>a');
console.log(sideNavListA)
let listSub = document.querySelectorAll('.sideNav_submenu');
let plusIcon = document.querySelectorAll('.plus_icon');
for (let i = 0; i < sideNavList.length; i++) {
  sideNavList[i].addEventListener('click', function (e) {
    // 닫혀있는 다른 부분을 모두 닫기
    for (let j = 0; j < listSub.length; j++) {
      if (j !== i) {
        classAction(j)
      } 
    }
    // 현재 클릭한 부분 열기 또는 닫기
    this.classList.toggle('view');
    listSub[i].classList.toggle('select');
    plusIcon[i].classList.toggle('active');
  });
}

for (let i = 0; i < sideNavListA.length; i++) {
  sideNavListA[i].addEventListener('click', function (e) {
    // 닫혀있는 다른 부분을 모두 닫기
    for (let j = 0; j < listSub.length; j++) {
      if (j !== i) {
        classAction(j)
      }
      if (j == i) {
        classAction(j)
      }
    }
  });
}
function classAction(forA){
  sideNavList[forA].classList.remove('view');
  listSub[forA].classList.remove('select');
  plusIcon[forA].classList.remove('active');
}

/*사이드 네비게이션의 서브메뉴 a 선택 시 고정*/
let sideNavSubmenu = document.querySelectorAll('.sideNav_submenu>li>a');
for (let m = 0; m < sideNavSubmenu.length; m++) {
  sideNavSubmenu[m].addEventListener('click', function (e) {
    // 현재 클릭한 항목에 'on' 클래스 추가
    sideNavSubmenu[m].classList.add('on');

    // 나머지 항목에서 'on' 클래스 제거
    for (let n = 0; n < sideNavSubmenu.length; n++) {
      if (n !== m) {
        sideNavSubmenu[n].classList.remove('on');
      }
    }
  });
}

/*table*/
const rowsPerPage = 12;
const rows = document.querySelectorAll('#my_table tbody tr');
const rowsCount = rows.length;
const pageCount = Math.ceil(rowsCount/rowsPerPage);
const numbers = document.querySelector('#numbers');
const prevPageBtn = document.querySelector('.pagenation .arrow_left'); 
const nextPageBtn = document.querySelector('.pagenation .arrow_right');
let pageActiveIdx = 0; 
let currentPageNum = 0;
let maxPageNum = 5;


for(let k = 1; k <= pageCount; k++){
  //numbers.innerHTML = '<li><a href="">'+i+'</a></li>'
  //numbers.innerHTML = numbers.innerHTML+`<li><a href="">${i}</a></li>`
  numbers.innerHTML += `<li><a href="">${k}</a></li>`
}

//생성된 페이지 번호 숨기기
const numberBtn = numbers.querySelectorAll('a');
for(nb of numberBtn){
  nb.style.display = 'none';
}

//각 페이지 번호 클릭 시 처리하는 함수들
numberBtn.forEach((item, idx)=>{
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    displayRow(idx);
  });
});

//현재 페이지의 행을 보여주는 함수
function displayRow(idx){
  let start = idx * rowsPerPage; //1페이지 첫행 0 2페이지의 첫행10 ..이런 식
  let end = start + rowsPerPage
  let rowsArray = [...rows];

  for(ra of rowsArray){
    ra.style.display = 'none';
  }

  let newRows =rowsArray.slice(start, end);
  for(nr of newRows){
    nr.style.display = '';
  }

  for(nb of numberBtn){
    nb.classList.remove('select_btn');
  }
  numberBtn[idx].classList.add('select_btn');
  document.getElementById('pageNum').innerHTML = `${idx + 1}`
}

displayRow(0); //초기 페이지 설정

//페이지 그룹을 보여주는 함수
function displayPage(num){
  for(nb of numberBtn){
    nb.style.display = 'none';
  }
  let totalPageCount = Math.ceil(pageCount / maxPageNum);
  let pageArr = [...numberBtn];
  let start = num * maxPageNum;
  let end = start + maxPageNum;
  let pageListArr = pageArr.slice(start, end);

  //선택된 페이지 그룹만 표시
  for(let item of pageListArr){
    item.style.display = 'block';
  }

  //이전 페이지 버튼의 표시 여부 설정
  if(pageActiveIdx ==0){
    prevPageBtn.style.display = 'none';
  }else{
    prevPageBtn.style.display = 'block';
  }

  //다음 페이지 버튼의 표시 여부 설정
  if(pageActiveIdx == totalPageCount-1){
    nextPageBtn.style.display = 'none';
  }else {
    nextPageBtn.style.display = 'block';
  }
}

displayPage(0); //초기 페이지 그룹 설정

//다음 페이지 버튼 클릭 시 처리
nextPageBtn.addEventListener('click', ()=>{
  let nextPageNum = pageActiveIdx * maxPageNum + maxPageNum;
  displayRow(nextPageNum);
  ++pageActiveIdx;
  displayPage(pageActiveIdx);
});

//이전 페이지 버튼 클릭 시 처리
prevPageBtn.addEventListener('click', () =>{
  let prevPageNum = pageActiveIdx * maxPageNum - maxPageNum;
  displayRow(prevPageNum);
  --pageActiveIdx;
  displayPage(pageActiveIdx);
})

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
