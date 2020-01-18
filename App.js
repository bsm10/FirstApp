import React, { Component } from 'react';
import { View, Image, StyleSheet, Text, FlatList, ScrollView, ActivityIndicator, TouchableOpacity } from 'react-native'
import { ImageCard } from '../FirstApp/components/ImageCard'
import { w, h } from '../FirstApp/components/constants'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class HomeScreen extends Component {
  state = {
    data: [],
    isLoading: true
  }

  static navigationOptions = {
    title: `New Photos ${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`,
  };

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
    const {navigate} = this.props.navigation;
    console.log ('state', this.state)
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator/>
        </View>
      )
    }
    return (
      <ScrollView>
      <View style = { styles.container }>
        {this.state.data.map(item => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
            img: item.urls.regular,
            })} 
            key={item.id}>
              <ImageCard data={item} key={item.id}/>
          </TouchableOpacity>
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

class DetailsScreen extends Component {
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
const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Details: {screen: DetailsScreen},
  },
  {
      initialRouteName: 'Home',
  }
  );
  
  const url = 'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
  
  const AppContainer = createAppContainer(MainNavigator);
  
  export default class App extends React.Component {
    render() {
      return <AppContainer/>;
    }
  }
  
  
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
