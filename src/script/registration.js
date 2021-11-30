import axios from "axios";
import elements from './refs'
const PNotify = require('@pnotify/core');
const PNotifyMobile = require('@pnotify/mobile');

  
 
PNotify.defaultModules.set(PNotifyMobile, {});
PNotify.defaults.delay = 2000;
      
const refs = elements();

refs.regSbmtBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let pass = refs.regPassInput.value;
  let email = refs.regEmailInput.value;
  let name = refs.regNameInput.value;
  regNewUser(email, pass, name)
    .then(({ data }) => {
      clearInput();
      refs.modalReg.classList.remove('visible');
      PNotify.alert({text: 'All right. You can login'});
      
    })
    .catch(err => {
      if (err.request) {
        clearInput();
      PNotify.alert({text: 'This email alredy exist'});
      }      
    });

})
function clearInput() {
  refs.regPassInput.value = ''
  refs.regEmailInput.value = ''
  refs.regNameInput.value = ''
}
const regNewUser = (email, password, displayName) => {
  const key = 'AIzaSyCS6w77npNsoPIFPZknk6oiWERM9nM9Aro'
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`, {
    email, password, displayName, returnSecureToken: TextTrackCueList
  })
}
