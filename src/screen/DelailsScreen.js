import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
//import { rootReducer } from '../FirstApp/src/reducers'
import { w, h } from '../../components/constants'

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 2,
    justifyContent: "space-around"
    },
  imageFull: {
    width: w,
    height: h,
    resizeMode: 'stretch',
    //resizeMode: 'cover',
  }
  })

export default class DetailsScreen extends Component {
  render() {
    const img = this.props.navigation.getParam('img', 'NO-ID')
    console.log ('param', img)
    return (
      <View>
        <Image style={ styles.imageFull } source={{ uri: img}}/>
      </View>
    );
  }
}
