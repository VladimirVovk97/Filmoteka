export default function refs() {
  return {
    modalLog: document.querySelector('#modal-log'),
  logSbmtBtn: document.querySelector('#log-sbmt-btn'),
  logLoginInput: document.querySelector('#log-login-input'),
  logPassInput: document.querySelector('#log-pass-input'),
  logEmailInput: document.querySelector('#log-email-input'),
  
  myLibBtn:document.querySelector('#my-lib-btn'),
  singUpBtn:document.querySelector('#singup-btn'),
  loginBtn:document.querySelector('#login-btn'),
  userIcon: document.querySelector('#user'),
  logoutBtnCont: document.querySelector('#logout'),
    logoutBtn: document.querySelector('#logout-btn'),
  
   
    
  filmCard: document.querySelector('.film-card__img'),
    filmTitle: document.querySelector('.film-card__title'),
  
     modalReg: document.querySelector('#modal'),
  regNameInput: document.querySelector('#reg-name-input'),
  regPassInput: document.querySelector('#reg-pass-input'),
  regEmailInput: document.querySelector('#reg-email-input'),
    regSbmtBtn: document.querySelector('#reg-sbmt-btn'),
    queueLibBtn: document.querySelector('#btn-queue'),
      watchedLibBtn: document.querySelector('#btn-watched'),
      loggedStatus : localStorage.getItem('logged'),
  }
}