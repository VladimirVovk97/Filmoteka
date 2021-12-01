const axios = require('axios').default;
import elements from './refs'
import singInUser from './singInWithPassword'
import ApiService from '../.partials/js/apiService';
  const apiService = new ApiService();
const refs = elements();
var PNotify = require('@pnotify/core');
var PNotifyMobile = require('@pnotify/mobile');
PNotify.defaultModules.set(PNotifyMobile, {});
PNotify.defaults.delay = 1000;
let loggedStatus = localStorage.getItem('logged');

const addFilmsInQueue = (name, token, filmName, filmId) => {
   
  
  return axios.patch(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}/queue.json?auth=${token}`, {
    
    [filmName] : filmId,

  })
}
const addFilmsInWatched = (name, token, filmName, filmId) => {
   
  
  return axios.patch(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}/watched.json?auth=${token}`, {
    
    [filmName] : filmId,

  })
}
refs.createCardMovie.addEventListener('click', onCardClick)
function onCardClick() {
  document.querySelector('#queueInModal').addEventListener('click', onAddToQueueBtnClick)
  document.querySelector('#watchedInModal').addEventListener('click', onAddToWatchedBtnClick)
}
function onAddToWatchedBtnClick(event) {
   event.preventDefault();
  // console.log(event.currentTarget.closest('li'));
  apiService.id = localStorage.getItem('currentId')
  
  // console.log(apiService.id);

  apiService.fetchDescribeMovie().then(res => {
    
    if (loggedStatus) {
  
      let accNameFromLocal = localStorage.getItem('accName');
      let tokenFromLocal = localStorage.getItem('token');
console.log(res.title, res.id);
      addFilmsInWatched(accNameFromLocal, tokenFromLocal, res.title, res.id)
          
    }
  }
  )
}
function onAddToQueueBtnClick(event) {
  event.preventDefault();
  // console.log(event.currentTarget.closest('li'));
  apiService.id = localStorage.getItem('currentId')
  
  // console.log(apiService.id);

  apiService.fetchDescribeMovie().then(res => {
    
    if (loggedStatus) {
  
      let accNameFromLocal = localStorage.getItem('accName');
      let tokenFromLocal = localStorage.getItem('token');
console.log(res.title, res.id);
      addFilmsInQueue(accNameFromLocal, tokenFromLocal, res.title, res.id)
          
    }
  }
  )
}
  
     

(function checkLogin() {
  if (loggedStatus === 'true') {
   userAccButtonVisible()
  }
})()


refs.logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('currentId', '')
  refs.cards.innerHTML = ''
  userAccButtonInvisible();
  localStorage.setItem('logged', false)
})
// 
refs.logSbmtBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let email = refs.logLoginInput.value;
  let password = refs.logPassInput.value;
  singInUser(email, password)
    .then(({ data }) => {
      clearInput();
      userAccButtonVisible();
      localStorage.setItem('token', data.idToken)
      localStorage.setItem('accName', data.displayName)  
      localStorage.setItem('logged', 'true');
      refs.modalLog.classList.remove('visible');
      alert(`Welcome, ${data.displayName}`)
      PNotify.alert({ text: `Welcome, ${data.displayName}` });
   
    }).catch(err => {
      if (err.request) {
        clearInput();
        console.log(err.request);
        alert(`Welcome, ${data.displayName}`)
      PNotify.alert({text: 'Something wrong!'});
      }      
    });

})

function userAccButtonVisible (){

  refs.modalLog.classList.remove('visible')
  clearInput();
    
    refs.myLibBtn.classList.remove('invisible')
  // refs.userIcon.classList.remove('invisible')
  refs.logoutBtnCont.classList.remove('invisible')
    refs.loginBtn.classList.add('invisible')
    refs.singUpBtn.classList.add('invisible')
    
}
function userAccButtonInvisible() {
  refs.myLibBtn.classList.add('invisible')
  // refs.userIcon.classList.remove('invisible')
  refs.logoutBtnCont.classList.add('invisible')
    refs.loginBtn.classList.remove('invisible')
    refs.singUpBtn.classList.remove('invisible')
}
function clearInput () {
  refs.logLoginInput.value = '';
  refs.logPassInput.value = '';
}

