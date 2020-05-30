import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import moment from 'moment'

import Routes from './routes'

import { store, persistor } from './store'

moment.locale('pt-br')

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <Routes />
      </PersistGate>
    </Provider>
  )
}

export default App
