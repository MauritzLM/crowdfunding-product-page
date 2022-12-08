// mobile menu toggle
const menuIcon = document.querySelector('.menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');
const closeMenu = document.querySelector('.close-menu');

// open menu
menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle('not-visible');
    closeMenu.style.display = "block";
    menuIcon.style.display = "none";
});

//close menu
closeMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle('not-visible');
    closeMenu.style.display = "none";
    menuIcon.style.display = "block";
});
