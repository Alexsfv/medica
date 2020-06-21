let nav = document.querySelector('.header');
let burgerButton = document.querySelector('.burger-button');
let closeBurger = document.querySelector('.close-menu');
let heightNav = nav.clientHeight;

let wrapperMenu = document.querySelector('.wrapper-right-menu');
let rightMenu = document.querySelector('.right-menu');

burgerButton.addEventListener('click', toggleBurger);
closeBurger.addEventListener('click', toggleBurger);
wrapperMenu.addEventListener('click', toggleBurger);
window.addEventListener('scroll', minifyNav);


function toggleBurger(event) {
    event.stopPropagation();
    wrapperMenu.classList.toggle('active');
    rightMenu.classList.toggle('active');
    document.body.classList.toggle('lock');
}

function minifyNav() {
    
    if (window.scrollY > 40) {
        nav.classList.add('scrolled');
        // document.querySelector('.slider').style.marginTop = heightNav+"px";
    } else {
        nav.classList.remove('scrolled');
        // document.querySelector('.slider').style.marginTop = heightNav+"px";
    }
}