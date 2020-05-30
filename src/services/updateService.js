import moment from 'moment'

import { store } from '../store'

export const hasUpdatedToday = (reducer) => {
  try {
    if (!reducer) {
      return false
    }
    
    const { [reducer]: { dateLastRequest } } = store.getState()
    
    const now = moment.now()
    
    if (dateLastRequest && moment(dateLastRequest).add('hours', 6) > now){
      return true
    }
  
    return false
  } catch (error) {
    return false
  }
}
