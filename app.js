const modal = document.querySelector('.modal')
const openModalBtn = document.querySelector('.open-modal_btn')
const closeModalBtn = document.querySelector('.close-modal_btn')

function openModal() {
    modal.classList.add('open')
}

function closeModal() {
    modal.classList.remove('open')
}

openModalBtn.addEventListener('click', openModal)

closeModalBtn.addEventListener('click', closeModal)

const submitBtn = document.querySelector('.submit-btn')


const emailText = document.querySelector('.email-text')
const passwordText = document.querySelector('.password-text')
const confirmPasswordText = document.querySelector('.confirm-password-text')

submitBtn.addEventListener('click', function (event) {
    event.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const confirmPassword = document.querySelector('#confirm-password').value

    emailText.innerText = email
    passwordText.innerText = password
    confirmPasswordText.innerText = confirmPassword

    closeModal()
}) 