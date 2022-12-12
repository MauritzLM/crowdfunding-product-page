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

// modal popup
const selectRewardButtons = document.querySelectorAll('.select-pledge-btn');
const selectionModal = document.querySelector('.modal-container');
const closeModalBtn = document.querySelector('.close-modal-btn');

for (let button of selectRewardButtons) {
    button.addEventListener('click', (e) => {
        selectionModal.style.display = 'block';

    });
};

closeModalBtn.addEventListener('click', () => {
    selectionModal.style.display = 'none';
});

// progress bar

const progressBar = document.querySelector('.progress-bar div');
const currentAmount = document.querySelector('.current-amount');
const targetAmount = document.querySelector('.target-amount');

const displayProgressBar = () => {

    let current = getNumber(currentAmount.textContent);
    let target = getNumber(targetAmount.textContent);

    progressBar.style.width = `${(current / target) * 100}%`;
}

// function to get number from string
const getNumber = (str) => {
    const regex = /[\d]/g;
    let numArr = str.match(regex);
    let num = numArr.join('');

    return Number(num);
}

displayProgressBar();


// pledge submission
// need: number input, submit button, current backed amount, pledge selection modal, thankyou modal
const form = document.querySelector('form');
const numberInputs = document.querySelectorAll('.not-visible input[type="number"]');

form.addEventListener('submit', (e) => {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            let newAmount = Number(numberInputs[i].value) + getNumber(currentAmount.textContent);
            currentAmount.textContent = `$${newAmount}`; // need to add comma/ decimal
        }
    }
    // update total backers

    // display thank you modal

    selectionModal.style.display = 'none';
    e.preventDefault();

})



