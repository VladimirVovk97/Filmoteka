const axios = require('axios').default;


const refs = {
  modalLog: document.querySelector('#modal-log'),
  logSbmtBtn: document.querySelector('#log-sbmt-btn'),
  logLoginInput: document.querySelector('#log-login-input'),
  logPassInput: document.querySelector('#log-pass-input'),
  logEmailInput: document.querySelector('#log-email-input'),
  justBtn: document.querySelector('#just-btn'),
}

refs.logSbmtBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(refs.regLoginInput.value, refs.regPassInput.value, refs.regEmailInput.value);
  const login = refs.logLoginInput.value;
  const pass = refs.logPassInput.value;
 
  check(login, pass)
  
   
  
  // console.log((refs.justBtn));
  //   .then((res) => {
  // let keys = Object.keys(res.data)
  // keys.forEach(e => {
  //   let loginDB = res.data[e].login;
  //   let passDB = res.data[e].pass;
  //   if (login === loginDB && pass === passDB) {
  //     return alert(`hello ${login}`);
      
  //   }
  //   })
// })
  refs.modalLog.classList.remove('visible');
  
})

const  check = (email, password) => {
  const apiKey = 'AIzaSyAWAXkZ1Aoma9HbJZpvxk8waYFkb00fr-k';
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {    
    email,
    password,
    returnSecureToken: true,
    
  }).then(res => {
    let response = JSON.parse(res.request.response)
    return response.idToken;
  })
    .then(token => create(token, 'herok'))
    .catch(response => console.log(`такой email или пароль не существует`))
}
const create = function (token, data) {
  // if (!token) {
  //   return Promise.resolve(console.log('такого токена  нет'))
  // }
  return fetch(`https://kinoteka-hd-default-rtdb.europe-west1.firebasedatabase.app/registr.json/auth=${token}`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body:JSON.stringify(data),
  }).then(res => res.json()).then(console.log)
}
// const create = function (token ) {
//   if (!token) {
//     return Promise.resolve(console.log('такого токена  нет'))
//   }
//   return fetch(`https://kinoteka-hd-default-rtdb.europe-west1.firebasedatabase.app/registr.json?${token}`, {
    
//   }).then(res => res.json()).then(console.log)
// }
const clear = function () {
  logLoginInput.value = '';
  logPassInput.value = '';
}