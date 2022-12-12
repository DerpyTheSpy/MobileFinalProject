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
          options={{ title: 'Raddit' }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="CreatePost" component={CreatePost} />
        <Stack.Screen name="Post" component={Post} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const data = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Content 1',
    author: 'Author 1',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Content 2',
    author: 'Author 2',
  },
];

const HomeScreen = ({ navigation }) => {
  const handlePress = (id) => {
    navigation.navigate('Post', { id });
    // console.log(title);
  };

  const renderItem = ({ item: post }) => (
    <TouchableOpacity onPress={() => handlePress(post.id)}>
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
  const [posts, setPosts] = React.useState(data);
  // useEffect(() => {
  //   // console.error('asd');
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://192.168.0.158:3000');
  //       // console.log(response.status);
  //       if (response.status === 200) {
  //         console.log('yo');
  //       } else {
  //         console.log('yo');
  //       }
  //     } catch (error) {
  //       console.error(JSON.stringify(error.response));
  //       console.log('nos');
  //     }
  //   };
  //   fetchData();
  // }, []);

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
          />
        </SafeAreaView>
      </View>
    </View>
  );
};

// import { useNavigation } from '@react-navigation/native';

// const Home = () => {
//   const navigation = useNavigation();

//   const handlePress = () => {
//     navigation.navigate('Details');
//   };

//   return (
//     <View>
//       <Button title="Go to Details" onPress={handlePress} />
//     </View>
//   );
// };

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
});
