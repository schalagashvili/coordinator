import React, { Component } from 'react'
import { Location, Permissions } from 'expo'
import Map from '../Map'
import { ToggleWrapper, Container } from './styles'
import Switch from '../Switch'

export default class App extends Component {
  state = {
    location: null,
    longitude: null,
    latitude: null,
    tracking: false,
    errorMessage: null,
    switchValue: false
  }

  componentWillUnmount() {
    if (this.state.tracking) {
      clearInterval(this.state.tracking)
    }
  }

  toggleSwitch = value => {
    this.setState({ switchValue: value })
    this.trackingLocation()
  }

  trackingLocation = () => {
    if (!this.state.switchValue) {
      this._getLocationAsync()
      const tracking = setInterval(() => {
        this._getLocationAsync()
      }, 1200)
      this.setState({ tracking })
    } else {
      clearInterval(this.state.tracking)
    }
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
    const { latitude, longitude, switchValue, errorMessage } = this.state

    return (
      <Container>
        <Container>
          <Map latitude={latitude} longitude={longitude} tracking={switchValue} />
        </Container>
        <ToggleWrapper>
          <Switch toggleSwitch={this.toggleSwitch} switchValue={switchValue} />
        </ToggleWrapper>
        {errorMessage && <Text>{errorMessage}</Text>}
      </Container>
    )
  }
}
