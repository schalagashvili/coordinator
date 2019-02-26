import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../../../actions/logout'
import { StatusBar } from '../../../../styles/global'
import { Container, Title, Button, ButtonText } from './styles'

class HomeScreen extends React.Component {
  logout = async () => {
    await this.props.logout()
    this.props.navigation.navigate('Login')
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Container>
          <Title>Home</Title>
          <Button onPress={() => this.logout()}>
            <ButtonText>Logout</ButtonText>
          </Button>
        </Container>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: bindActionCreators(logout, dispatch)
  }
}

const mapStateToProps = state => {
  return {}
}

const Home = connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)

export default Home
