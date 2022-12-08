// mobile menu toggle
const menuIcon = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeMenu = document.querySelector(".close-menu");

// open menu
menuIcon.addEventListener('click', () => {
    dropdownMenu.classList.toggle("not-visible");
    closeMenu.style.display = "block";
    menuIcon.style.display = "none";
});

//close menu
closeMenu.addEventListener('click', () => {
    dropdownMenu.classList.toggle("not-visible");
    closeMenu.style.display = "none";
    menuIcon.style.display = "block";
});


// pledge selection
const radioButtons = document.querySelectorAll("input[type='radio']");
const fieldsets = document.querySelectorAll('fieldset');

for (let i = 0; i < radioButtons.length; i++) {
    // add event listener to all radio buttons
    radioButtons[i].addEventListener('click', (e) => {
        // loop through all radio buttons again to add/remove styles
        for (let j = 0; j < radioButtons.length; j++) {
            // if checked change styles
            if (radioButtons[j].checked) {
                fieldsets[j].className = "selected";
            }
            else {
                fieldsets[j].className = "";
            }
        }

    })
}