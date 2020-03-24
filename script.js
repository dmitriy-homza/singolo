let header = document.querySelector('header')
let navLink = document.querySelector('nav ul').children;

let services = document.querySelector('#services');
let portfolio = document.querySelector('#portfolio');
let about = document.querySelector('#about');
let quote = document.querySelector('#quote');


//Отсеиваем не ссылки (точки) в навигации
let oddNavLink = [];
let z = 0;
for (let i = 0; i<=navLink.length-1; i++) {
  if (i % 2 == 0 || i == 0) {
      oddNavLink[z] = navLink[i];
      z++;
  }
}


//Активируем перемещение к секции по клику
for (i=0; i<oddNavLink.length; i++) {
  oddNavLink[i].addEventListener('click', function(){
  //Для мобильного бургера 
  burgerIcon.classList.remove('rotate');
  document.querySelector('nav').classList.remove('menu-active');

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
let vertPhone = document.querySelector('.VPhone');
vertPhone.addEventListener('click', function () {
  if (vert.getAttribute('class').substr(12) != 'to-dark') {
    vert.classList.add('to-dark');
  }
  else {
    vert.classList.remove('to-dark');
  }
});
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
let horiPhone = document.querySelector('.HPhone');
horiPhone.addEventListener('click', function () {
  if (hori.getAttribute('class').substr(12) != 'to-dark') {
    hori.classList.add('to-dark');
  }
  else {
    hori.classList.remove('to-dark');
  }
});

//Переключение табов
function changeOrder() {
  imgArray[z].classList.add('ordered');
}

let imgArray = document.querySelectorAll('.gallery img');
let tabsArray = document.querySelectorAll('.portfolio a');
for (let i = 0; i<tabsArray.length; i++) {
  tabsArray[i].addEventListener('click', function() {
    /*if (i!=0) {
      document.querySelector('#portfolio').classList.remove('portfolio-full');
    }
    else {
      document.querySelector('#portfolio').classList.add('portfolio-full');
    }
    */ //Уменьшаем размер блока, если фотографий для него меньше 12
      /*if (tabsArray[i].querySelector('li').innerHTML.match(/[A-za-z]+/)[0]===imgArray[z].getAttribute('class').match(/[A-za-z]+/)[0] & i!=0) {
          setTimeout(() => imgArray[z].classList.add('ordered'),300);
          setTimeout(() => imgArray[imgArray.length-1].classList.add('order-last'),300);
          setTimeout(() => imgArray[imgArray.length-1].classList.add('ordered'),300);
      }
      else {
          setTimeout(() => imgArray[z].classList.remove('ordered'),300);
      }*/ //Уменьшаем размер блока, если фотографий для него меньше 12
      if (tabsArray[i].querySelector('li').getAttribute('class')!=='active'){
        for (let k = 0; k<tabsArray.length; k++){
          tabsArray[k].querySelector('li').classList.remove('active');
        }
        tabsArray[i].querySelector('li').classList.add('active');
        for (let z = 0; z<imgArray.length; z++){
          imgArray[z].classList.add('change-animation');
          setTimeout(() => imgArray[z].classList.remove('ordered'),300);
          setTimeout(() => imgArray[z].classList.remove('order-3'),300);
          setTimeout(() => imgArray[z].classList.remove('order-2'),300);
          setTimeout(() => imgArray[z].classList.remove('order-1'),300);
    
          if (tabsArray[i].querySelector('li').innerHTML.match(/[A-za-z]+/)[0]==='Web') {
            if (imgArray[z].getAttribute('class').match(/[A-za-z]+/)[0]==='Web') {
              setTimeout(() => imgArray[z].classList.add('ordered'),300);
            }
            setTimeout(() => imgArray[imgArray.length-1].classList.add('order-3'),300);
          };
          if (tabsArray[i].querySelector('li').innerHTML.match(/[A-za-z]+/)[0]==='Graphic') {
            if (imgArray[z].getAttribute('class').match(/[A-za-z]+/)[0]==='Graphic') {
              setTimeout(() => imgArray[z].classList.add('ordered'),300);
            }
            setTimeout(() => imgArray[imgArray.length-2].classList.add('order-3'),300);
            setTimeout(() => imgArray[imgArray.length-1].classList.add('order-2'),300);
          };
          if (tabsArray[i].querySelector('li').innerHTML.match(/[A-za-z]+/)[0]==='Artwork') {
            if (imgArray[z].getAttribute('class').match(/[A-za-z]+/)[0]==='Artwork') {
              setTimeout(() => imgArray[z].classList.add('ordered'),300);
            }
            setTimeout(() => imgArray[imgArray.length-3].classList.add('order-3'),300);
            setTimeout(() => imgArray[imgArray.length-2].classList.add('order-2'),300);
            setTimeout(() => imgArray[imgArray.length-1].classList.add('order-1'),300);
          };
          imgArray[z].addEventListener('animationend', function () {
          this.classList.remove('change-animation');
          });
        }
      }
  })
}

//Взаимодействие с картинками

for (let r = 0; r<imgArray.length; r++){
  imgArray[r].addEventListener('click', function() {
    for (let h = 0; h<imgArray.length; h++){
      imgArray[h].classList.remove('clicked-img');
      imgArray[r].classList.add('clicked-img');
    }

  });
}

//Pop-up
let name = document.querySelector('#name').value;
let email = document.querySelector('#email').value;
let subject = document.querySelector('#subject').value;
let message = document.querySelector('textarea').value;
let submit = document.querySelector('#submit');
let pop = document.querySelector('.popup');
const regExpName = /^[a-zA-ZА-Яа-яЁё\s]+$/;
const regExpEmail = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;

  submit.addEventListener('click', function(){
    document.querySelector('.submit-form p').remove();
    let notice = document.createElement('p');
    document.querySelector('.submit-form').appendChild(notice);
    if (regExpName.test(document.querySelector('#name').value) & regExpEmail.test(document.querySelector('#email').value)) {
      console.log('Прошло');
      if (document.querySelector('#subject').value!=='') {
        document.querySelector('.pop-subject').innerHTML=('Тема: '+'<span>'+document.querySelector('#subject').value+'</span>');
      }
      else {
        document.querySelector('.pop-subject').innerHTML=('Без темы');
      }
      if (document.querySelector('textarea').value!=='') {
        document.querySelector('.pop-message').innerHTML=('<div class="description-name">Описание: </div>'+'<span>'+document.querySelector('textarea').value+'</span>');
      }
      else {
        document.querySelector('.pop-message').innerHTML=('Без описания');
      }
      pop.classList.remove('not-display');
    }
    else if (regExpName.test(document.querySelector('#name').value)) {
        document.querySelector('.submit-form p').innerHTML = 'Введите Email в необходимом формате';
    }
    else if (regExpEmail.test(document.querySelector('#email').value)) {
        document.querySelector('.submit-form p').innerHTML = 'Введите имя в необходимом формате';
    }
    else {
      notice.innerHTML = 'Введите имя и Email в необходимом формате';
    }
  });


document.querySelector('button').addEventListener('click', function(){
  document.getElementById("quote-form").reset();
  pop.classList.add('not-display');
  document.querySelector('main').classList.remove('de-emphasized');
  document.querySelector('body').classList.remove('overflow-hidden');
});

let burgerIcon = document.querySelector('header img');
burgerIcon.addEventListener('click', function() {
  if (burgerIcon.getAttribute('class')=='rotate') {
    burgerIcon.classList.remove('rotate');
    document.querySelector('nav').classList.remove('menu-active');
  }
  else {
    burgerIcon.classList.add('rotate');
    document.querySelector('nav').classList.add('menu-active');
  }

})