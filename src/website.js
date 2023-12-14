//Imports

//Header
function createHeader(){
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('title');
    title.textContent = 'Home-grown'

    header.appendChild(title);
    return header;
};


//Nav
function createNav(){    
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const home = document.createElement('button');
    home.classList.add('home-link');
    home.classList.add('nav-item');
    home.textContent ='HOME';

    const menu = document.createElement('button');
    menu.classList.add('menu-link');
    menu.classList.add('nav-item');
    menu.textContent ='MENU';

    const contact = document.createElement('button');
    contact.classList.add('contact-link');
    contact.classList.add('nav-item');
    contact.textContent ='CONTACT';

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);
    return nav;
}

//Main
function createMain(){   
    const main = document.createElement('div');
    main.setAttribute('id','main')
    main.classList.add('main');
    return main;
}

//Footer
function createFooter(){   
    const footer =document.createElement('div');
    footer.classList.add('footer')
    footer.textContent = 'copyright and my info';
    return footer;
}


function createSite(){
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createNav());
    content.appendChild(createMain());
    content.appendChild(createFooter());
    return content;
};

function loadSite(){// doesn't work because it well import/run loadHome before main is created
    createSite();
    loadHome();
}

export default createSite;