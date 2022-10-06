const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-menu__item-link');
const navMenuTitle = document.querySelector('.nav-menu__open');
const friendsBtn = document.querySelector('.friends-slider__item-btn');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal-close');

function showHideMenu() {
    burger.classList.toggle('open');
    navMenu.classList.toggle('open');
    navMenuTitle.classList.toggle('open');
}

function hideMenuForLinks() {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
    navMenuTitle.classList.remove('open');
}

burger.addEventListener('click', showHideMenu);

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', hideMenuForLinks);
}


function showModal() {
    modal.classList.add('open');
}

friendsBtn.addEventListener('click', showModal);


function closeModal() {
    modal.classList.remove('open');
}

modalClose.addEventListener('click', closeModal);