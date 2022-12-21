// mobile menu toggle
const menuIcon = document.querySelector(".menu-icon");
const dropdownMenu = document.querySelector(".dropdown-menu");
const closeMenu = document.querySelector(".close-menu");
const navModal = document.querySelector(".nav-modal");
const main = document.querySelector("main");



// open menu
menuIcon.addEventListener('click', () => {
    dropdownMenu.style.display = "block";
    closeMenu.style.display = "block";
    menuIcon.style.display = "none";
    navModal.style.display = "block";

    // change z-index of main
    main.style.zIndex = "0"
});

//close menu
closeMenu.addEventListener('click', () => {
    dropdownMenu.style.display = "none";
    closeMenu.style.display = "none";
    menuIcon.style.display = "block";
    navModal.style.display = "none";

    // change z-index of main
    main.style.zIndex = "1";
});


//bookmark
const bookmarkDiv = document.querySelector('.bookmark');
const bookmarkIcon = document.querySelector('.bookmark img');
const bookmarkText = document.querySelector('.bookmark span');

bookmarkDiv.addEventListener('click', () => {
    // change text

    if (bookmarkText.textContent === 'bookmark') {
        bookmarkText.textContent = 'bookmarked';
        // text color
        bookmarkText.style.color = "hsl(176, 50%, 47%)";
        // img source ./images/icon-bookmark-checked.svg
        bookmarkIcon.src = './images/icon-bookmark-checked.svg';
    } else {
        bookmarkText.textContent = 'bookmark'
        // text color
        bookmarkText.style.color = "hsl(0, 0%, 48%)";
        // img source ./images/icon-bookmark.svg
        bookmarkIcon.src = './images/icon-bookmark.svg';
    }

})

// pledge selection
const radioButtons = document.querySelectorAll("input[type='radio']");
const fieldsets = document.querySelectorAll("fieldset");
const fieldsetDiv = document.querySelectorAll(".select-amount");
const pledgeAmount = document.querySelectorAll(".pledge-amount");


for (let i = 0; i < radioButtons.length; i++) {
    // add event listener to all radio buttons
    radioButtons[i].addEventListener('click', (e) => {
        // loop through all radio buttons again to add/remove styles
        for (let j = 0; j < radioButtons.length; j++) {

            // if checked change styles
            if (radioButtons[j].checked) {
                // set required on number input if radio button is checked
                numberInputs[j].setAttribute("required", "");

                fieldsets[j].className = "selected";
                fieldsetDiv[j].className = "select-amount";
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
                // remove required if radio button not checked
                numberInputs[j].removeAttribute("required");

                fieldsets[j].className = "";
                fieldsets[radioButtons.length - 1].className = "disabled";
                fieldsetDiv[j].className = "select-amount not-visible";
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
        selectionModal.style.display = 'flex';
        window.scrollTo(0, 0);
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
const form = document.querySelector('form');
const numberInputs = document.querySelectorAll('input[type="number"]');
const totalBackers = document.querySelector('.total-backers');
const successModal = document.querySelector('.success-modal-container');
const successModalButton = document.querySelector('.success-modal-container button');

form.addEventListener('submit', (e) => {
    for (let i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            // calculate the new backed amount
            let newAmount = Number(numberInputs[i].value) + getNumber(currentAmount.textContent);

            // if target hit??

            // create correct format
            let newAmountStr = newAmount.toString();
            let newAmountStart = newAmountStr.slice(0, 2);
            let newAmountEnd = newAmountStr.slice(2);
            currentAmount.textContent = `$${newAmountStart},${newAmountEnd}`;

            // update number of backers
            totalBackers.textContent = `${getNumber(totalBackers.textContent) + 1}`
        }
    }

    // display thank you modal  

    selectionModal.style.display = 'none';
    successModal.style.display = 'block';
    window.scrollTo(0, 0);
    displayProgressBar();
    e.preventDefault();
});

// remove thank you modal
successModalButton.addEventListener('click', () => {
    successModal.style.display = 'none';
});



