import React from 'react'
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/AntDesign'

import { HomeScreen, LoginScreen } from './screens'

const MainNavigator = createBottomTabNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Login') {
          // iconName = 'bookmark'
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#478aff',
      inactiveTintColor: 'gray'
    }
  }
)

const HomeStack = createStackNavigator({
  Home: { screen: MainNavigator }
})

export default createAppContainer(MainNavigator)
