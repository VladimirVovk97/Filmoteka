const refs = {
  headerInput: document.querySelector('.header__input'),
  inputText: document.querySelector('.header__input-text'),
  iconSearch: document.querySelector('.icon-search'),
  
  
  modalReg: document.querySelector('#modal'),
  regCloseBtn: document.querySelector('#reg-close-btn'),
  singupBtn: document.querySelector('#singup-btn'),
  
  
  
  modalLog: document.querySelector('#modal-log'),
  logCloseBtn: document.querySelector('#log-close-btn'),
  loginBtn: document.querySelector('#login-btn'),
  

}





refs.headerInput.addEventListener('focus', (e) => {
  e.preventDefault();
  
  refs.inputText.classList.add('invsbl');
})
refs.headerInput.addEventListener('blur', (e) => {
  if (e.target.value.length > 0) {
    return;
  }
    refs.inputText.classList.remove('invsbl')
  
   
})
  refs.iconSearch.addEventListener('click', () => {
 
  refs.headerInput.value = '';
  refs.inputText.classList.remove('invsbl')
})
refs.singupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refs.modalReg.classList.add('visible');
  // console.log('hello');
})
refs.loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refs.modalLog.classList.add('visible');
  // console.log('hello');
})
refs.regCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refs.modalReg.classList.remove('visible');
})
refs.logCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refs.modalLog.classList.remove('visible');
})


