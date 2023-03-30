import axios from 'axios'
import { CONFIG } from '~/utils/constants'

export default defineEventHandler(async (event) => {
  try {
    const { data } = await axios.get(`${CONFIG.API_HOST}/api/repo_status`)
    return data
  } catch(error) {
    console.log('[API] get status error', error)
    throw error
  }
})
