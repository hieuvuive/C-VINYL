const button = document.getElementById('sign-up')
const form = document.getElementById('modal__sign-up')
const exit = document.getElementById('auth-form__controls-back')

button.addEventListener('click',()=>{
    form.style.display = 'flex'
})

exit.addEventListener('click',()=>{
    form.style.display = 'none'
})