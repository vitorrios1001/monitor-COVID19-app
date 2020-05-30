import api from "./api"
import moment from  'moment'

import { Actions } from '../store/ducks/countries'
import { store } from '../store'

import { hasUpdatedToday } from "./updateService"

export const getAllCountries = async (forceRequest = false) => {
  try {
    if (!forceRequest && hasUpdatedToday('countries')) {
      return
    }

    const { data } = await api.get('/v1/countries')

    store.dispatch(Actions.setCountries(data.data))
    store.dispatch(Actions.setDateLastRequest(moment.now()))
    return data.data
  } catch (error) {
    return null
  }
}