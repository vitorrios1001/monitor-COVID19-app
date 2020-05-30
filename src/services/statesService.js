import api from "./api"
import moment from  'moment'

import { Actions } from '../store/ducks/states'
import { store } from '../store'

import { IMG_STATES } from "../helpers/images"
import { hasUpdatedToday } from "./updateService"

export const getAllStates = async (forceRequest = false) => {
  try {
    if (!forceRequest && hasUpdatedToday('states')) {
      return
    }

    const { data } = await api.get('/v1')

    const list = data.data.map(item => ({
      ...item,
      image: IMG_STATES[item.uf],
      datetime: moment(item.datetime).format('DD/MM/YYYY HH:mm')
    }))

    store.dispatch(Actions.setStates(list))
    store.dispatch(Actions.setDateLastRequest(moment.now()))
    return list
  } catch (error) {
    return null
  }
}