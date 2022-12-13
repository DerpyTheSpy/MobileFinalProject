import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Image,
  Picker,
  TouchableHighlight,
  TouchableOpacity,
  Button,
  SafeAreaView,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreatePost from './CreatePost';
import axios from 'axios';
import Post from './Post';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Forum' }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const postList = [
  {
    id: 1,
    title: 'How to use React Native',
    content: 'lorem ipsum dolor sit amet ',
    author: 'Stanley T.',
  },
  {
    id: 2,
    title: 'Why React is superior to React Native',
    content: 'Content 2',
    author: 'Minkyu K.',
  },
  {
    id: 3,
    title: 'I wish I could use React for mobile development',
    content: 'Content 3',
    author: 'John Cena',
  },
  {
    id: 4,
    title: 'I want to go back to React',
    content: 'Content 4',
    author: 'John Doe',
  },
];

const HomeScreen = ({ navigation }) => {
  const handlePress = (post) => {
    const { id, title, content, author } = post;
    navigation.navigate('Post', { id, title, content, author });
  };

  const renderItem = ({ item: post }) => (
    <TouchableOpacity onPress={() => handlePress(post)} style={styles.post}>
      <View style={styles.item}>
        {/* <Image style={styles.itemImage} source={{ uri: post.thumbnail }} /> */}
        <View style={styles.itemText}>
          <Text style={styles.itemTitle}>{post.title}</Text>
          <Text style={styles.itemAuthor}>{post.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  // this initial state is just for testing, we will fetch the posts from the API later and set the intial state to an empty array
  const [posts, setPosts] = React.useState(postList);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Forum</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search by title"
            onSubmitEditing={() => {
              console.log('submit');
            }}
            onKeyPress={(event) => {
              if (event.nativeEvent.key == 'Enter') {
                alert(event.nativeEvent.key);
              }
            }}
          />
        </View>
        <SafeAreaView>
          <FlatList
            data={posts}
            renderItem={renderItem}
            keyExtractor={(post) => post.id}
            style={styles.postContainer}
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  body: {
    flex: 1,
    padding: 10,
  },
  search: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,

    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
  },
  searchButton: {
    width: 100,
    height: 40,
    marginLeft: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  searchButtonText: {
    color: '#fff',
  },
  item: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemText: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemAuthor: {
    fontSize: 12,
    color: '#999',
  },
  post: {
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  postContainer: {
    borderRadius: 5,
    backgroundColor: '#eee',
    padding: 10,
  },
});
