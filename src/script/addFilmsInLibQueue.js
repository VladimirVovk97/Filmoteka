const axios = require('axios').default;
import libElements from './refs'
// import DataBaseTools from './DataBaseInterface'
import card from '../.partials/film-card-lib.hbs';
// DataBaseTools.fetchFi

// const dataBaseTools = new DataBaseTools(userName, userToken)
const refs = libElements();


// (function checkLoginAndAddEventListener() {
  
  
if (refs.loggedStatus === 'true') {
  refs.queueLibBtn.addEventListener('click', (e) => {
    e.preventDefault();
      let userName = localStorage.getItem('accName');
let userToken = localStorage.getItem('token');
    fetchFilmsWithAuth(userName, userToken).then(res => {
      // let data = res.data
      try {
        let filmsNames = Object.keys(res.data.queue)
      // console.log(filmsNamesQueue);
      // refs.cards.insertAdjacentHTML('beforebegin', card({ filmsNamesQueue }))
              refs.cards.innerHTML = card({ filmsNames })
      // console.log(card({ filmsNamesQueue }));
      } catch {
        console.log('no films');
     }

    })

  })
  refs.watchedLibBtn.addEventListener('click', (e) => {
    e.preventDefault();
      let userName = localStorage.getItem('accName');
let userToken = localStorage.getItem('token');
    fetchFilmsWithAuth(userName, userToken).then(res => {
        try{
      let filmsNames = Object.keys(res.data.watched)
      // console.log(filmsNamesWatched);
      refs.cards.innerHTML = card({ filmsNames })
      // console.log(card({ filmsNamesWatched }));
      } catch {
        console.log('no films');
     }
    })
  }
  )
}
// })()



function fetchFilmsWithAuth(name, token) {
  return axios.get(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${name}.json?auth=${token}`, )
}