import React, { Component } from 'react';
import { View, Image, StyleSheet, ScrollView, ActivityIndicator } from 'react-native'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connect, Provider } from 'react-redux'
import { fetchPhotos } from './src/actions'
import * as reducers from './src/reducers'
//import { rootReducer } from '../FirstApp/src/reducers'
import { ImageCard } from './components/ImageCard'
import { w, h } from './components/constants'
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const reducer = combineReducers(reducers)
const store = createStore(reducer, applyMiddleware(thunk));

class HomeScreen extends Component {
  // state = {
  //   data: [],
  //   loading: true
  // }

  //state = store.state

  static navigationOptions = {
    title: `New Photos ${new Date().getDate()}.${new Date().getMonth()+1}.${new Date().getFullYear()}`,
  };

  // componentDidMount = async () => {
  //   try {
  //     const response = await fetch('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0', {
  //       method: 'GET'
  //     })
  //     const data = await response.json()
  //     this.setState({ data: data, loading: false })
  //   } catch (e) {
  //     throw e
  //   }
  // }

  componentDidMount(){
    //this.props.dispatch(fetchPhotos())
    //store.dispatch(fetchPhotos())
    //store.fetchPhotos

    //this.props.fetchPhotos()
    console.log('componentDidMount')
     console.log ('loading', store.loading)
     console.log ('data', store.data)
//    console.log ('loading', this.state.loading)
//    console.log ('loading', this.state.data)
  }
  
  render () {
    const {navigate} = this.props.navigation;
    const { data, loading, error } = this.props
    //console.log ('loading', this.props.loading)
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
        {/* {data.map(item => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Details', {
            img: item.urls.regular,
            })} 
            key={item.id}>
              <ImageCard data={item} key={item.id}/>
          </TouchableOpacity>
        ))} */}
      </View>
    </ScrollView>
        
       

    )
  }

}
// const mapStateToProps = state => ({
//   data: state.data
// })

// export default connect(
//   mapStateToProps,
//   { fetchPhotos }
// )(HomeScreen)

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
  
  const AppContainer = createAppContainer(MainNavigator);
  
  // export default class App extends React.Component {
  //   render() {
  //     return <AppContainer/>
  //   }
  // }

  const App = () => (
    <Provider store={store}>
      <AppContainer/>
    </Provider>
  )

  export default App
  
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
