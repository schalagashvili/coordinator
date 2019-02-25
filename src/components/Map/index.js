import React from 'react'
import { Dimensions, Text, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'

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
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA
          }}
        >
          {tracking && latitude && longitude && (
            <Marker coordinate={marker} title={'marker.title'} description={'marker.description'} />
          )}
        </MapView>
        {tracking && (
          <View
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5);',
              width: WIDTH,
              position: 'absolute',
              bottom: 43,
              paddingBottom: 15
            }}
          >
            <Text style={{ textAlign: 'center', color: 'white' }}>Your Coordinates:</Text>
            <Text style={{ textAlign: 'center', color: 'white' }}>Latitude: {latitude}</Text>
            <Text style={{ textAlign: 'center', color: 'white' }}>longitude: {longitude}</Text>
            <Text style={{ textAlign: 'center', color: 'white', fontSize: 9 }}>* This coordinates are updated every 1200ms}</Text>
          </View>
        )}
      </View>
    )
  }
}
