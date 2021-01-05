import { Plugin } from '@nuxt/types'
import { initializeAxios } from '~/utils/api'

const accessor: Plugin = ({ $axios }) => {
  $axios.setBaseURL('http://localhost:4000')
  initializeAxios($axios)
}

export default accessor
