import AxiosService from '@/common/service/axios-service'
// import axios from '@nuxtjs/axios'
const axios = new AxiosService()
export default {
  getBillAll () {
    return axios.doGet('/api/bill/')
  }
}
