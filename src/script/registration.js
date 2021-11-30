import axios from "axios";

const refs = {
  modalReg: document.querySelector('#modal'),
  regLoginInput: document.querySelector('#reg-login-input'),
  regPassInput: document.querySelector('#reg-pass-input'),
  regEmailInput: document.querySelector('#reg-email-input'),
  regSbmtBtn: document.querySelector('#reg-sbmt-btn'),
}
// console.log(database);

refs.regSbmtBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(refs.regLoginInput.value, refs.regPassInput.value, refs.regEmailInput.value);
  signUp(
    // refs.regLoginInput.value,
    refs.regEmailInput.value,
    refs.regPassInput.value
    )
  refs.modalReg.classList.remove('visible');
})


const signUp = function (email, password ) {
  const apiKey = 'AIzaSyAWAXkZ1Aoma9HbJZpvxk8waYFkb00fr-k';
  return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
    method: 'POST',
    body: JSON.stringify({email, password, returnSecureToken:true}),
    
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json()).then(response => console.log(response.error.message))
}


