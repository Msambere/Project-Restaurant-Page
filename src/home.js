//Imports

//Main
export function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');
    home.appendChild(restaurantIntro());
    home.appendChild(chefPhoto());

    return home;
};

function restaurantIntro(){
    const intro = document.createElement('p')
    intro.classList.add('intro');
    intro.textContent = 'Enjoy a little slice of home from Big Mama';
    return intro;
};

function chefPhoto() {
    const chefPhoto = document.createElement('img');
    chefPhoto.classList.add('chef-photo');
    chefPhoto.src ='../dist/images/chef.jpeg';
    return chefPhoto;
};



