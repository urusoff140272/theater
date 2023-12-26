//--------------БУРГЕР МЕНЮ--------------------------------------------------------------------------
const burgerMenu = document.querySelector('.hamburger');
const navigationMenu = document.querySelector('.header__navigation');


function openMenu(event) {
    navigationMenu.classList.toggle('_active');
    event.stopPropagation();
}

burgerMenu.addEventListener("click", openMenu);

function closeMenu() {
    if (navigationMenu.classList.contains('_active')) {
        navigationMenu.classList.remove('_active');
    }
};

window.addEventListener('click', closeMenu);