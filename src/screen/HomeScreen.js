import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { fetchPhotos } from '../../src/actions'
import { ImageCard } from '../../components/ImageCard'

class HomeScreen extends Component {
  static navigationOptions = {
    title: `New Photos ${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`,
  };

  componentDidMount(){
    this.props.fetchPhotos()
  }

  render () {
    const { navigate } = this.props.navigation;
    const { data, loading, error } = this.props
    console.log ('this.props', this.props)
    if(loading){
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView>
      <View style = { styles.container }>
        {this.props.data.map(item => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
            img: item.urls.regular,
            })}
            key={item.id}>
              <ImageCard data={item} key={item.id}/>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
    )
  }
}

function mapStateToProps(state){
  console.log('state', state)
  return {
    data: state.default.photosList.data,
    loading: state.default.photosList.loading,
    error: state.default.photosList.error
  }
}

export default connect(
  mapStateToProps,
  { fetchPhotos }
)(HomeScreen)

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 2,
    justifyContent: "space-around"
    },
  })
