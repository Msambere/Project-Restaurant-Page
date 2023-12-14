//Menu:

const menulist = [
    {'name': 'Apple pie', 'price': 9.99, 'photo': '../dist/images/Dutch-Apple-Pie-10.jpg', 'alt': 'slice of apple pie','description': 'Just like mom makes it, fresh out the oven with a scoop of vanilla gelato'},
    {'name': 'Collard greens', 'price': 4.99, 'photo': '../dist/images/collard-greens.jpg', 'alt':'bowl of collard greens','description': 'Straight from our fields and simmered with turkey bones'}
]

//Main
export function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menulist.forEach((item) => {
        let x = createMenuItem(item);
        menu.appendChild(x);
    });
    return menu;
};

function createMenuItem(menuObject) {
    const container = document.createElement('div');
    container.classList.add('menu-item')
    const name = document.createElement('p');
    name.classList.add('menu-item-name')
    const price = document.createElement('p');
    price.classList.add('menu-item-price')
    const photo = document.createElement('img');
    photo.classList.add('menu-item-img')
    const description = document.createElement('p')
    description.classList.add('menu-item-p')

    name.textContent = menuObject.name;
    price.textContent = menuObject.price;
    photo.src = menuObject.photo;
    photo.setAttribute('alt', menuObject.alt);
    description.textContent = menuObject.description;

    container.appendChild(name);
    container.appendChild(price);
    container.appendChild(photo);
    container.appendChild(description);

    return container;


};


