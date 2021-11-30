const axios = require('axios').default;
export default (email, password) => {
  const key = 'AIzaSyCS6w77npNsoPIFPZknk6oiWERM9nM9Aro'
  return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`, {
    email, password, returnSecureToken: true
  })
}