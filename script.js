let header = document.querySelector('header')
let navLink = document.querySelector('nav ul').children;

let services = document.querySelector('#services');
let portfolio = document.querySelector('#portfolio');
let about = document.querySelector('#about');
let quote = document.querySelector('#quote');


let oddNavLink = [];
let z = 0;
for (let i = 0; i<=navLink.length-1; i++) {
  if (i % 2 == 0 || i == 0) {
      oddNavLink[z] = navLink[i];
      z++;
  }
}

for (i=0; i<oddNavLink.length; i++) {
  oddNavLink[i].addEventListener('click', function(){
  document.querySelector('ul li.active').classList.remove('active');
  this.classList.add('active');
  let blockID = this.querySelector('a').getAttribute('href').substr(1);
  document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
});
});
};

window.onscroll = function() {
  if (window.pageYOffset > header.offsetTop) {

    header.classList.add("sticky");
    // Активные ссылки
    if (window.pageYOffset+150 >= header.offsetTop) {
     document.querySelector('ul li.active').classList.remove('active');
     oddNavLink[0].classList.add('active');
   }
     if (window.pageYOffset+150 >= services.offsetTop) {
      document.querySelector('ul li.active').classList.remove('active');
      oddNavLink[1].classList.add('active');
    }
    if (window.pageYOffset+150 >= portfolio.offsetTop) {
      document.querySelector('ul li.active').classList.remove('active');
      oddNavLink[2].classList.add('active');
    }
    if (window.pageYOffset+150 >= about.offsetTop) {
      document.querySelector('ul li.active').classList.remove('active');
      oddNavLink[3].classList.add('active');
    }
    if (window.pageYOffset+400 >= quote.offsetTop) {
      document.querySelector('ul li.active').classList.remove('active');
      oddNavLink[4].classList.add('active');
    }
  }
  else {
      header.classList.remove("sticky");
  };
};



// Анимация слайдера
let items = document.querySelectorAll('.item');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add(direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('s-active', direction);
  })
}

function showItem(direction) {
  isEnabled = false;
  items[currentItem].classList.add('next', direction);
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction);
    this.classList.add('s-active');
    isEnabled = true;
    if (currentItem==1) {
      document.querySelector('.slider').classList.add('blue');
    }
    else {
      document.querySelector('.slider').classList.remove('blue');
    }
  })
}

function previousItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}

document.querySelector('.left').addEventListener('click', function() {
  if (isEnabled) {
    previousItem(currentItem);
  }
});

document.querySelector('.right').addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
});



// Экранчик тухнут
let vert = document.querySelector('.vert-screen');
vert.addEventListener('click', function () {
  if (vert.getAttribute('class').substr(12) != 'to-dark') {
    vert.classList.add('to-dark');
  }
  else {
    vert.classList.remove('to-dark');
  }
});

let hori = document.querySelector('.hori-screen');
hori.addEventListener('click', function () {
  if (hori.getAttribute('class').substr(12) != 'to-dark') {
    hori.classList.add('to-dark');
  }
  else {
    hori.classList.remove('to-dark');
  }
});
