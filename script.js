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
const fieldsets = document.querySelectorAll("fieldset");
const fieldsetDiv = document.querySelectorAll("fieldset div");
const pledgeAmount = document.querySelectorAll(".pledge-amount");

for (let i = 0; i < radioButtons.length; i++) {
    // add event listener to all radio buttons
    radioButtons[i].addEventListener('click', (e) => {
        // loop through all radio buttons again to add/remove styles
        for (let j = 0; j < radioButtons.length; j++) {
            // if checked change styles
            if (radioButtons[j].checked) {
                fieldsets[j].className = "selected";
                fieldsetDiv[j].className = "";
                // toggle bold class on pledge amount info
                // correct logic but need to find a better way to write this
                if (j === 1) {
                    pledgeAmount[0].className = "pledge-amount bold";
                    pledgeAmount[1].className = "pledge-amount";
                } else if (j === 2) {
                    pledgeAmount[0].className = "pledge-amount";
                    pledgeAmount[1].className = "pledge-amount bold";

                } else {
                    pledgeAmount[0].className = "pledge-amount";
                    pledgeAmount[1].className = "pledge-amount";
                }

            }
            else {
                fieldsets[j].className = "";
                fieldsetDiv[j].className = "not-visible";
            }
        }

    })
}