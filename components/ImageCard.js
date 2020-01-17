import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'
import { w } from './constants'

const styles = StyleSheet.create({
  container: {
    width: w / 2.4,
    paddingVertical: 20,
    margin: 10,
  },
  sub: {
    shadowColor: '#000',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4
  },
  h1: {
    paddingTop: 5,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 16,
    alignSelf: 'center',
    textAlign: 'center'
  },
  h2: {
    paddingTop: 5,
    fontFamily: 'AvenirNext-DemiBold',
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center'
  },

  cover: {
    width: w / 2.4,
    height: w * 0.63,
    borderRadius: 8
  }
})

const ImageCard = ({ data }) => {
  const { container, sub, h1, h2, cover } = styles
  const { id, description } = data
  return (
    <View style={container}>
    <View style={sub}>
      <Image style={cover} source={{ uri: data.urls.small }} />
    </View>
    <Text style={h1}>Description: "{data.description}"</Text>
    <Text style={h2}>Author: {data.user.name}</Text> 
    
  </View>
  )
}

export { ImageCard }