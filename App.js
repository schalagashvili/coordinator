import React from 'react'
import Routes from './src/routes'
import store from './index'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}