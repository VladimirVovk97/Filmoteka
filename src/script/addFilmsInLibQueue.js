const axios = require('axios').default;
import libElements from './refs'
import ApiService from '../.partials/js/apiService';
  const apiService = new ApiService();
// import DataBaseTools from './DataBaseInterface'
import card from '../.partials/film-card-lib.hbs';
import openModal from '../.partials/js/modal-film-description'


// DataBaseTools.fetchFi
let loggedStatus = localStorage.getItem('logged')
// const dataBaseTools = new DataBaseTools(userName, userToken)
const refs = libElements();
// const refs2 = refs();

// (function checkLoginAndAddEventListener() {
  function onAddToWatchedBtnClick(id) {
  //  event.preventDefault();
  // console.log(event.currentTarget.closest('li'));
  apiService.id = id
  
  // console.log(apiService.id);

  apiService.fetchDescribeMovie().then(res => {
    
    // if (loggedStatus) {
  
      let accNameFromLocal = localStorage.getItem('accName');
      let tokenFromLocal = localStorage.getItem('token');
      // console.log(card( res ));
    // console.log();
              refs.cards.insertAdjacentHTML('beforeend', card({res}))

      // addFilmsInWatched(accNameFromLocal, tokenFromLocal, res.title, res.id)
          
    // }
  }
  )
}
  
if (refs.loggedStatus === 'true') {
  refs.queueLibBtn.addEventListener('click', (e) => {
    console.log();
    refs.watchedLibBtn.style.backgroundColor = 'transparent'
    refs.queueLibBtn.style.backgroundColor = 'orange'
    refs.cards.innerHTML = ''
    e.preventDefault();
      let userName = localStorage.getItem('accName');
let userToken = localStorage.getItem('token');
    fetchFilmsWithAuth(userName, userToken).then(res => {
      // let data = res.data
      // try {
        
      let filmsNames = Object.keys(res.data.queue)
      let filmsId = Object.values(res.data.queue)

      filmsId.forEach(id => {
        onAddToWatchedBtnClick(id)
      })
      console.log(filmsId);
        // refs.cards.innerHTML = card({ filmsNames })
      
      

    })

  })
  refs.watchedLibBtn.addEventListener('click', (e) => {
    refs.queueLibBtn.style.backgroundColor = 'transparent'
    refs.watchedLibBtn.style.backgroundColor = 'orange'
    refs.cards.innerHTML = ''
    e.preventDefault();
      let userName = localStorage.getItem('accName');
let userToken = localStorage.getItem('token');
    fetchFilmsWithAuth(userName, userToken).then(res => {
      // try {

        let filmsNames = Object.keys(res.data.watched)
              let filmsId = Object.values(res.data.watched)

                        // console.log(filmsNames);
filmsId.forEach(id => {
        onAddToWatchedBtnClick(id)
      })
      
      // } catch {
      //   console.log('no films');
    //  }
    })
  }
  )
}

            
function fetchFilmsWithAuth(name, token) {
  return axios.get(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}.json?auth=${token}`, )
}