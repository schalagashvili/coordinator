import React from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../../actions/login'
import { StatusBar } from '../../styles/global'
import { CustomInput, Container, Title, ErrorText, ErrorWrapper, Button, ButtonText } from './styles'

class LoginScreen extends React.Component {
  state = { email: '', password: '', errorText: 'Please fill in fields', error: false }

  login = async () => {
    const { email, password } = this.state

    await this.props.login()

    if (email === '' || password === '') {
      this.setState({ error: true })
    } else if (this.props.token) {
      this.setState({ email: '', password: '', error: false })
      this.props.navigation.navigate('Dashboard')
    }
  }

  render() {
    const { email, password, error, errorText } = this.state

    return (
      <View>
        <StatusBar />
        <Container>
          <Title>Login</Title>
          <CustomInput
            label='Email'
            placeholder='Email'
            value={email}
            type='text'
            onChangeText={email => this.setState({ email })}
          />
          <CustomInput
            label='Password'
            placeholder='Password'
            secureTextEntry
            value={password}
            type='password'
            onChangeText={password => this.setState({ password })}
          />
          <ErrorWrapper>{error && <ErrorText>{errorText}</ErrorText>}</ErrorWrapper>
          <Button onPress={() => this.login()}>
            <ButtonText>Login</ButtonText>
          </Button>
        </Container>
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: bindActionCreators(login, dispatch)
  }
}

const mapStateToProps = state => {
  return {
    token: state.login.data
  }
}

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
export default Login
