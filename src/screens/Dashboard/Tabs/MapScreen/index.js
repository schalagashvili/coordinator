import React, { Component } from 'react'
import { View } from 'react-native'
import { Coordinates } from '../../../../components/index'
import { StatusBar } from '../../../../styles/global'

class HomeScreen extends Component {
  state = {
    switchValue: true
  }

  toggleSwitch = value => {
    this.setState({ switchValue: value })
  }

  render() {
    return (
      <View>
        <StatusBar />
        <Coordinates />
      </View>
    )
  }
}

export default HomeScreen
