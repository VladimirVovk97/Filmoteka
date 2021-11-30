import refs from './refs'
const axios = require('axios').default;

// const refs = libElements();
export default class DataBaseTools{
  constructor(name, token) {
    this.name = name;
    this.token = token;
  }

  fetchFilmsWithAuth() {
  return axios.get(`https://films-watch-default-rtdb.europe-west1.firebasedatabase.app/users/${this.name}.json?auth=${this.token}`, )
  }
  checkLoginAndAddEventListener(funcBody) {
     if (refs.loggedStatus === 'true') {
    refs.queueLibBtn.addEventListener('click', (e) => {
      e.preventDefault();
      

    })
    
  }
  }
}