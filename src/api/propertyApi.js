import axios from 'axios'

export default axios.create({
  baseURL: ' https://cors-anywhere.herokuapp.com/' + 'api.housecanary.com/v2/',
  auth: {
    username: 'YHT9D6X11A8W4ZB2PV02',
    password: 'b9eoStk09PVDCwgs3ZueqLkGhEv4YJsH'
  },
  params: {
    address: '483 Bright St',
    zipcode: 94132
  },
  timeout: 5000
})
