import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import routes from '../constants/routes'

const Stack = createStackNavigator()

const Routes = () => {
  const renderRoutes = () => (
    routes.map((route) => (
      <Stack.Screen
        key={route.name}
        name={route.name}
        component={route.component}
        options={{
          headerTitle: route.showDefaultHeader ? route.description : null ,
        }}
      />
    ))
  )

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {renderRoutes()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
