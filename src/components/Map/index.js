import React from 'react'
import { Dimensions, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { Coordinates, SmallText, CoordinatesContainer } from './styles'

const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

const ASPECT_RATIO = WIDTH / HEIGHT
const LATITUDE_DELTA = 0.0922
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

export default class App extends React.Component {
  render() {
    const { latitude, longitude, tracking } = this.props

    const marker = {
      latitude: latitude,
      longitude: longitude
    }

    return (
      <View style={{ position: 'relative' }}>
        <MapView
          style={{ width: WIDTH, height: HEIGHT, position: 'relative' }}
          initialRegion={{
            latitude: latitude && latitude,
            longitude: longitude && longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          {tracking && latitude && longitude && (
            <Marker coordinate={marker} title={'marker.title'} description={'marker.description'} />
          )}
        </MapView>
        {tracking && (
          <CoordinatesContainer width={WIDTH}>
            <Coordinates>Your Coordinates:</Coordinates>
            <Coordinates>Latitude: {latitude}</Coordinates>
            <Coordinates>longitude: {longitude}</Coordinates>
            <SmallText>* Coordinates are updated every 1200ms}</SmallText>
          </CoordinatesContainer>
        )}
      </View>
    )
  }
}
