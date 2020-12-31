import { Context } from '@nuxt/types'
import { initializeAxios } from '~/utils/axios'

// const accessor: Plugin = ({ $axios }) => {
//   initializeAxios($axios)
// }

export default (ctx: Context, _inject: any) => {
  const { $axios } = ctx
  $axios.setBaseURL('http://localhost:4000')
  initializeAxios($axios)
}
