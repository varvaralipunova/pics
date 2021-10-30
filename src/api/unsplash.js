import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Vi04XSOkl1k8-rhIILPNJntuFt9AqSWBMX1iLnBqX9w',
  },
})
