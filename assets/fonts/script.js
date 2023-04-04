const button = document.getElementById('sign-up')
const form = document.getElementById('modal__sign-up')
const exit = document.getElementById('auth-form__controls-back')

button.addEventListener('click',()=>{
    form.style.display = 'flex'
})

exit.addEventListener('click',()=>{
    form.style.display = 'none'
})

const button1 = document.getElementById('sign-up--in-hamburger')
const form1 = document.getElementById('modal__sign-up')
const exit1 = document.getElementById('auth-form__controls-back')

button1.addEventListener('click',()=>{
    form1.style.display = 'flex'
})

exit1.addEventListener('click',()=>{
    form1.style.display = 'none'
}) 

const hamburger = document.getElementById('hamburger-btn')
const form_hamburger = document.getElementById('hamburger-menu')
const hamburger_exit = document.getElementById('hamburger__controls-back')

hamburger.addEventListener('click',()=>{
    form_hamburger.style.display = 'flex'
})

hamburger_exit.addEventListener('click',()=>{
    form_hamburger.style.display = 'none'
})

// const hamburger1 = document.getElementById('hamburger-btn1')
// const form_hamburger1 = document.getElementById('hamburger-menu1')
// const hamburger_exit1 = document.getElementById('hamburger__controls-back1')

// hamburger.addEventListener('click',()=>{
//     form_hamburger.style.display = 'flex'
// })

// hamburger_exit.addEventListener('click',()=>{
//     form_hamburger.style.display = 'none'
// })

// const button1 = document.getElementById('sign-up--in-hamburger')
// const form1 = document.getElementById('modal__sign-up')
// const exit1 = document.getElementById('auth-form__controls-back')

// button.addEventListener('click',()=>{
//     form1.style.display = 'flex'
// })

// exit.addEventListener('click',()=>{
//     form1.style.display = 'none'
// })

