const axios = require('axios').default;
import elements from './refs'
import singInUser from './singInWithPassword'
import TmdbApiService from '../.partials/js/apiService';
  const tmdbApiService = new TmdbApiService();
const refs = elements();
var PNotify = require('@pnotify/core');
var PNotifyMobile = require('@pnotify/mobile');
PNotify.defaultModules.set(PNotifyMobile, {});
PNotify.defaults.delay = 1000;
let loggedStatus = localStorage.getItem('logged');

const addFilmsIdsInBd = (name, token, filmName, filmId) => {
   
  return axios.patch(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}.json?auth=${token}`, {
    
    [filmName] : filmId,

  })
}
addFilmsInQueue()
// fetchFilmsFromApi(94605).then(console.log)
// function fetchFilmsFromApi(id) {
//   // return axios.get(`https://api.themoviedb.org/3/movie/94605/external_ids?api_key=070151ea430b4e74dbca9bca592b262c`)
//   return axios.get(`https://api.themoviedb.org/3/find/tt0323352?api_key=070151ea430b4e74dbca9bca592b262c&language=en-US&external_source=imdb_id`)
// }

function addFilmsInQueue () {
  if (loggedStatus) {
  document.querySelector('.collection').addEventListener('click', (e) => {
    let filmId = e.target.dataset.id;
    let accNameFromLocal = localStorage.getItem('accName');
        let tokenFromLocal = localStorage.getItem('token');

    tmdbApiService.fetchFilms().then(response => response.find((id) => {
        
      if (id.id == filmId) {
        
        if (id.title === undefined) {
          addFilmsIdsInBd(accNameFromLocal, tokenFromLocal, id.name, filmId)
        } else {
          addFilmsIdsInBd(accNameFromLocal, tokenFromLocal, id.title, filmId)
        }
      }
    }))
          
      })
        
}
}



(function checkLogin() {
  if (loggedStatus === 'true') {
   userAccButtonVisible()
  }
})()


refs.logoutBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
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
      PNotify.alert({ text: `Welcome, ${data.displayName}` });
   
    }).catch(err => {
      if (err.request) {
        clearInput();
        console.log(err.request);
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

