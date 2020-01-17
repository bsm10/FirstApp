import React, { Component } from 'react';
import { View, StyleSheet, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import { ImageCard } from '../FirstApp/components/ImageCard'
// import { Card, ListItem, Button, Icon } from 'react-native-elements'

const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'


export default class App extends Component {
  state = {
    data: [],
    isLoading: true
  }

  componentDidMount = async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ data: data, isLoading: false })
      
    } catch (e) {
      throw e
    }
  }
  
  // componentDidMount(){
  //   return fetch(url)
  //     .then((response) => response.json())
  //     .then((responseJson) => {

  //       this.setState({
  //         isLoading: false,
  //         data: responseJson,
  //       }, function(){

  //       });

  //     })
  //     .catch((error) =>{
  //       console.error(error);
  //     });
  // }


  render () {
    console.log ('state', this.state)
    // const { container } = styles
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, alignItems: "center"}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView>
      <View style = { styles.container }>
        {this.state.data.map(item => (
          <ImageCard data={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
        // <View>
        // <FlatList style = { styles.flexList }
        //         data= {this.state.data}
        //         renderItem={({item}) => <ImageCard data = {item} />}
        //         keyExtractor={({id}, index) => id}
        //       />
        // </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    //numColumns: 2,
    flexShrink: 2,
    justifyContent: "space-around"
    }
  })
