import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Coordinates, Switch } from '../../components/index'

class HomeScreen extends Component {
  constructor() {
    super()
    this.state = {
      switchValue: false
    }
  }
  toggleSwitch = value => {
    this.setState({ switchValue: value })
  }

  render() {
    return (
      <View style={{ position: 'relative', top: 0, marginTop: -10 }}>
        <StatusBar translucent backgroundColor='rgba(0, 0, 0, 0.24)' animated />
        <Coordinates tracking={this.state.switchValue} />
        <View style={{ position: 'absolute', top: 20, left: 20 }}>
          <Switch toggleSwitch={this.toggleSwitch} switchValue={this.state.switchValue} />
        </View>
      </View>
    )
  }
}

export default HomeScreen
