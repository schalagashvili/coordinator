import React, { Component } from 'react'
import { Platform, Text, View, StyleSheet } from 'react-native'
import { Constants, Location, Permissions } from 'expo'
import Map from '../Map'

export default class App extends Component {
  state = {
    location: null,
    longitude: null,
    latitude: null,
    errorMessage: null
  }

  componentDidMount() {
    this._getLocationAsync()
    setInterval(() => {
      this._getLocationAsync()
    }, 1200)
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied'
      })
    }

    let location = await Location.getCurrentPositionAsync({})
    this.setState({ longitude: location.coords.longitude, latitude: location.coords.latitude })
  }

  render() {
    return (
      <View>
        <Text>{this.state.location}</Text>
        <Map latitude={this.state.latitude} longitude={this.state.longitude} tracking={this.props.tracking} />
      </View>
    )
  }
}
