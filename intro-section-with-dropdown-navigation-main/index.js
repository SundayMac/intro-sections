var darkScroll = document.getElementById('scroll-dark')

var features = document.getElementById('features');

var arrB = document.getElementById('b-ud')

var dropdown = document.getElementById('dropdown');

var second = document.getElementById("second");

var company = document.getElementById('company');

var arrC = document.getElementById('c-ud')

var menu= document.getElementById('menu');

var first=document.getElementById('first-slide');

var mClose = document.getElementById('close');

var feat = document.getElementById('feat-2');

var feaIcon = document.getElementById('arrow-fea');

var up = '/images/icon-arrow-up.svg';

var down = '/images/icon-arrow-down.svg';

var cont = document.getElementById('fea-cont');

var contIcon = document.getElementById('arrow');

var specs = document.getElementById('specs');

var about = document.getElementById('com-cont');

function feature() {
    if (dropdown.className === 'dropdown') {
      dropdown.classList.replace('dropdown','open');
      arrB.setAttribute('scr',up)
    } else {
       dropdown.classList.replace('open','dropdown')
        arrB.setAttribute('scr',down)
     }
}

function companys() {
  if (second.className == 'second-dropdown') {
      second.classList.replace('second-dropdown','second-open');
      arrC.setAttribute('scr',up);
  } else {
     second.classList.replace('second-open','second-dropdown');
     arrC.setAttribute('scr',down);
   }
}

function menuFunction() {
  first.classList.replace('no-slide','first-slide');
  darkScroll.classList.add('dark-fea');
}

function closeFunc() {
  first.classList.replace("first-slide","no-slide");
  darkScroll.classList.remove('dark-fea');
}

function feaFunc() {
  if (cont.className == 'about') {
    cont.classList.replace('about','inner-div');
    feaIcon.setAttribute('src',up);
  } else {
    cont.classList.replace('inner-div','about');
    feaIcon.setAttribute('src',down);
  }
}

function specsFunc() {
  if (about.className == 'about') {
    about.classList.replace('about','nd-inner');
   contIcon.setAttribute('src',up);
  } else {
    about.classList.replace('nd-inner','about')
    contIcon.setAttribute('src',down);
  }
}
company.addEventListener('click',companys)

features.addEventListener('click',feature)

feat.addEventListener('click',feaFunc)

specs.addEventListener('click',specsFunc)

menu.addEventListener('click',menuFunction);

mClose.addEventListener("click",closeFunc)
