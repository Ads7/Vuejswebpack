import axios from 'axios'

export default axios.create({
  baseURL: ' https://cors-anywhere.herokuapp.com/' + 'api.housecanary.com/v2/',
  auth: {
    username: 'Enter the app username',
    password: 'ENTER THE APP PASSWORD'
  },
  params: {
    address: '483 Bright St',
    zipcode: 94132
  },
  timeout: 5000
})
