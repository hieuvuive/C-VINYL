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

//data

// function WriteUserData( ) {
//     // Lấy các giá trị từ các trường input
//     const email = document.querySelector('input[placeholder="Email của bạn"]').value;
//     const password = document.querySelector('input[placeholder="Mật khẩu của bạn"]').value;
//     const confirmPassword = document.querySelector('input[placeholder="Nhập lại mật khẩu"]').value;
  
//     // Tạo một object chứa các giá trị này
//     const userData = {
//       email: email,
//       password: password,
//       confirmPassword: confirmPassword
//     };
  
//     // Đẩy object này lên Realtime Database
//     firebase.database().ref('User').push(userData);
//     alert("Đăng ký thành công!")
//   }

  //read

//   var valueUser = firebase.database().ref('User').child('email');
//     valueUser.on('value', snap => {
//     console.log('email: ', snap.val());
//     document.getElementById("hello").innerHTML= snap.val();
//   })
  

