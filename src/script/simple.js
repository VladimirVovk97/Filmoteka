import refs from "./refs";

const refsMain = {
  headerInput: document.querySelector('.header__input'),
  inputText: document.querySelector('.header__input-text'),
  iconSearch: document.querySelector('.icon-search'),
  
  
  modalReg: document.querySelector('#modal'),
  regCloseBtn: document.querySelector('#reg-close-btn'),
  singupBtn: document.querySelector('#singup-btn'),
  
  
  containerMainLib : document.querySelector('.container-main-lib'),
  modalLog: document.querySelector('#modal-log'),
  logCloseBtn: document.querySelector('#log-close-btn'),
  loginBtn: document.querySelector('#login-btn'),
  
  headerLibBtn: document.querySelector('#lib-home-btn'),
  headerMainMylibBtn: document.querySelector('#my-lib-btn'),
  headerLibrary: document.querySelector('.header-lib'),
  headerMain: document.querySelector('.header'),
  mainContentSection: document.querySelector('.section-main-content'),
  libraryContentSection: document.querySelector('.section-library'),
  pagin: document.querySelector('.tui-pagination')
}

refsMain.headerLibBtn.addEventListener('click', (e) => {
  e.preventDefault()
  refsMain.libraryContentSection.classList.add('invisible')
  refsMain.containerMainLib.classList.add('invisible')
  refsMain.headerMain.classList.remove('invisible')
  refsMain.headerLibrary.classList.add('invisible')
  refsMain.mainContentSection.classList.remove('invisible')
  refsMain.pagin.classList.remove('invisible')
})

refsMain.headerMainMylibBtn.addEventListener('click', (e) => {
  e.preventDefault()
    refsMain.containerMainLib.classList.remove('invisible')

refsMain.libraryContentSection.classList.remove('invisible')
  refsMain.mainContentSection.classList.add('invisible')
  refsMain.headerMain.classList.add('invisible')
  refsMain.headerLibrary.classList.remove('invisible')
  refsMain.pagin.classList.add('invisible')
})
// console.log(refsMain.loginBtn);




refsMain.headerInput.addEventListener('focus', (e) => {
  e.preventDefault();
  
  refsMain.inputText.classList.add('invsbl');
})
refsMain.headerInput.addEventListener('blur', (e) => {
  if (e.target.value.length > 0) {
    return;
  }
    refsMain.inputText.classList.remove('invsbl')
  
   
})
  refsMain.iconSearch.addEventListener('click', () => {
 
  refsMain.headerInput.value = '';
  refsMain.inputText.classList.remove('invsbl')
})
refsMain.singupBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalReg.classList.add('visible');
  // console.log('hello');
})
refsMain.loginBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalLog.classList.add('visible');
  // console.log('hello');
})
refsMain.regCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalReg.classList.remove('visible');
})
refsMain.logCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refsMain.modalLog.classList.remove('visible');
})


