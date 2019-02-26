import Login from './screens/Login'
import DashboardTabRoutes from './screens/Dashboard/Routes'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { HeaderStyles } from './styles/mixins'

const Routes = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerTitle: 'Login',
        header: null
      }
    },
    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
  }
)

export default createAppContainer(Routes)
