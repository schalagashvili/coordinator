import React, { Component } from 'react'
import { View, Switch, StyleSheet } from 'react-native'

export default (SwitchExample = props => {
  return (
    <View style={styles.container}>
      <Switch onValueChange={props.toggleSwitch} value={props.switchValue} />
    </View>
  )
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 10
  }
})
