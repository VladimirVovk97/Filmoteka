const axios = require('axios').default;
import libElements from './refs'
// import DataBaseTools from './DataBaseInterface'
import card from '../.partials/film-card-lib.hbs';
// DataBaseTools.fetchFi
let userName = localStorage.getItem('accName');
let userToken = localStorage.getItem('token');
// const dataBaseTools = new DataBaseTools(userName, userToken)
const refs = libElements();


(function checkLoginAndAddEventListener() {
  
  
  if (refs.loggedStatus === 'true') {
    refs.queueLibBtn.addEventListener('click', (e) => {
      e.preventDefault();
      

    })
    
  }
})()


fetchFilmsWithAuth(userName, userToken).then(res => {
  let data = res.data
  console.log(card(data))
})

function fetchFilmsWithAuth(name, token) {
  return axios.get(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}.json?auth=${token}`, )
}