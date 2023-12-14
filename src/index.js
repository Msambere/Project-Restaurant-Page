//Imports
import createSite from './website';
import {createHome} from './home';
import {createContact} from './contact';
import {createMenu} from './menu';


createSite();
const main = document.getElementById('main');
main.appendChild(createHome());

const homeBtn = document.querySelector('.home-link');
homeBtn.addEventListener('click', function () {
    let last = main.lastElementChild;
    main.removeChild(last);
    main.appendChild(createHome())});


const menuBtn = document.querySelector('.menu-link');
menuBtn.addEventListener('click', function(){
    let last = main.lastElementChild;
    main.removeChild(last);
    main.appendChild(createMenu())});

const contactBtn = document.querySelector('.contact-link');
contactBtn.addEventListener('click', function(){
    let last = main.lastElementChild;
    main.removeChild(last);
    main.appendChild(createContact())});



//Initialize site

//loadHome();

//Tab coding




/*
Examples sites:
    1. https://github.com/SultanBadri/restaurant-page/blob/main/src/index.js
        https://sultanbadri.github.io/restaurant-page/

    2. https://github.com/ginnerzapata/restaurant/blob/master/src/main-menu.js
        https://ginnerzapata.github.io/restaurant/

    3. https://michalosman.github.io/restaurant-page/
        https://github.com/michalosman/restaurant-page/blob/main/.gitignore


*/