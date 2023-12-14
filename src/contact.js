//Imports

//Main
export function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');
    contact.appendChild(restaurantNum());
    contact.appendChild(restaurantMap());
    return contact;
};

function restaurantMap(){
    const map = document.createElement('img');
    map.classList.add('map');
    map.src = '../dist/images/location-icon.png';
    return map;
};

function restaurantNum(){
    const num = document.createElement('div')
    num.classList.add('phone-number');
    num.textContent = '+1 402-867-5309'
    return num;
}

