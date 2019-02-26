import React from 'react'
import { createBottomTabNavigator, TabBarBottom, createStackNavigator, createAppContainer } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/AntDesign'
import MapScreen from './Tabs/MapScreen'
import HomeScreen from './Tabs/HomeScreen'
import CustomHeader from '../../components/CustomHeader'
import HeaderStyles from '../../styles/mixins'

let headerDefaultNavigationConfig = {
  header: null,
  ...HeaderStyles
}

const Map = createStackNavigator(
  {
    Map: {
      screen: MapScreen,
      navigationOptions: {
        header: null,
        headerTitle: 'Map Screen'
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
)

const Home = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    navigationOptions: {
      ...headerDefaultNavigationConfig
    }
  }
)

const DashboardTabRoutes = createBottomTabNavigator(
  {
    Home: Home,
    Map: Map
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'Home') {
          iconName = 'home'
        } else if (routeName === 'Map') {
          iconName = 'enviromento'
        }

        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#6200EE',
      inactiveTintColor: '#858585',
      style: {
        height: 60,
        paddingVertical: 5,
        backgroundColor: '#fff'
      },
      labelStyle: {
        fontSize: 12,
        lineHeight: 20
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true
  }
)

export default createAppContainer(DashboardTabRoutes)
