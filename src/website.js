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


//Tab
function createTab(){
    const tab = document.createElement('div');
    tab.classList.add('nav-tab');
    return tab
}

//Nav
function createNav(){    
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const home = document.createElement('button');
    home.classList.add('home-link');
    home.classList.add('nav-item');
    home.classList.add('active')
    home.textContent ='HOME';

    const homeTab = createTab();
    homeTab.classList.add('home-tab');
    homeTab.classList.add('active');
    homeTab.appendChild(home);

    const menu = document.createElement('button');
    menu.classList.add('menu-link');
    menu.classList.add('nav-item');
    menu.textContent ='MENU';

    const menuTab = createTab();
    menuTab.classList.add('menu-tab');
    menuTab.appendChild(menu);

    const contact = document.createElement('button');
    contact.classList.add('contact-link');
    contact.classList.add('nav-item');
    contact.textContent ='CONTACT';

    const contactTab = createTab();
    contactTab.classList.add('contact-tab');
    contactTab.appendChild(contact);

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
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