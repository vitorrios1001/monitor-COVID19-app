import { persistCombineReducers } from 'redux-persist'

import AsyncStorage from '@react-native-community/async-storage'

import countries from './countries'
import states from './states'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [],
}

const rootReducers = persistCombineReducers(persistConfig, {
  countries,
  states,
})

export default rootReducers
