const menu = document.querySelector('.header__menu');
const menuBurger = document.querySelector('.header__burger');
const menuList = document.querySelector('.menu__list');
const body = document.querySelector('body');

menuBurger.addEventListener('click', function() {
    menuBurger.classList.toggle('active');
	menu.classList.toggle('active');
    body.classList.toggle('lock');
});

menuList.addEventListener('click', function() {
    menuBurger.classList.remove('active');
	menu.classList.remove('active');
    body.classList.remove('lock');
});

/*------------------------------------------------------------*/

let lastScroll = 0;
const defaultOffSet = 200;
const header = document.querySelector('.header');

const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('hide');
const showBurger = () => menuBurger.classList.contains('active');

window.addEventListener('scroll', () => {
    if(scrollPosition() > lastScroll && !containHide() && !showBurger()) {
        header.classList.add('hide');
    }
    else if(scrollPosition() < lastScroll && containHide()) {
        header.classList.remove('hide');
    }
    lastScroll = scrollPosition();
})