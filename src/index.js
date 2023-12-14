//Imports
import createSite from './website';
import {createHome} from './home';
import {createContact} from './contact';
import {createMenu} from './menu';


createSite();
const main = document.getElementById('main');
main.appendChild(createHome());

//Tab coding

function toggleTab(event){
    let oldTab = document.querySelectorAll('.active');
    oldTab.forEach((element)=> element.classList.toggle('active'))
    let tab = event.target;
    console.log(tab);
    tab.classList.toggle('active');
    console.log(tab.nodeName);
    if (tab.nodeName === 'DIV'){
        console.log(tab.firstElementChild)
        tab.firstElementChild.classList.toggle('active');
    } else {
        console.log(tab.parentElement)
        tab.parentElement.classList.toggle('active');
    };
}

const homeBtn = document.querySelector('.home-tab');
homeBtn.addEventListener('click', function (event) {
    let last = main.lastElementChild;
    main.removeChild(last);
    main.appendChild(createHome());
    toggleTab(event);
});


const menuBtn = document.querySelector('.menu-tab');
menuBtn.addEventListener('click', function(event){
    let last = main.lastElementChild;
    main.removeChild(last);
    main.appendChild(createMenu());
    toggleTab(event);
});

const contactBtn = document.querySelector('.contact-tab');
contactBtn.addEventListener('click', function(event){
    let last = main.lastElementChild;
    main.removeChild(last);
    main.appendChild(createContact())
    toggleTab(event);
});



//Initialize site

//loadHome();







/*
Examples sites:
    1. https://github.com/SultanBadri/restaurant-page/blob/main/src/index.js
        https://sultanbadri.github.io/restaurant-page/

    2. https://github.com/ginnerzapata/restaurant/blob/master/src/main-menu.js
        https://ginnerzapata.github.io/restaurant/

    3. https://michalosman.github.io/restaurant-page/
        https://github.com/michalosman/restaurant-page/blob/main/.gitignore


*/