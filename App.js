//making forum app with react native and expo
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, FlatList, Image, Picker, TouchableHighlight, View } from 'react-native';
import HomeScreen from './HomeScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';


//needs to be an array of posts
const posts = [
  {
    id: '',
    createdAt: '',
    updatedAt: '',  
    title: '',
    content: '',
    author: '',
    authorId: '',
    comments: []
  }
];

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: posts,
      createdAt: '',
      updatedAt: '',  
      title: '',
      content: '',
      author: '',
      authorId: '',
      comments: []
    }
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts() {
    fetch('http://localhost:3000/posts')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          posts: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Forum</Text>
        <FlatList
          data={this.state.posts}
          renderItem={({item}) => <Text style={styles.item}>{item.title}</Text>}

        />
      </View>
    );
  }
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});



  
    


  
  

