const burgerButton = document.querySelector('#burger')
const header = document.querySelector('.header')

function expandToggle() {
    header.classList.toggle('expanded')
    burgerButton.classList.toggle('expanded')
    // console.log(burgerButton)
    // console.log(header)
}

burgerButton.addEventListener('click', expandToggle)