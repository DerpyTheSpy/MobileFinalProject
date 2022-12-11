import React, { useEffect } from 'react';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
        <Stack.Screen name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const fakePosts = [
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
  const renderItem = ({ item: post }) => (
    <View style={styles.item}>
      {/* <Image style={styles.itemImage} source={{ uri: post.thumbnail }} /> */}
      <View style={styles.itemText}>
        <Text style={styles.itemTitle}>{post.title}</Text>
        <Text style={styles.itemAuthor}>{post.author}</Text>
      </View>
    </View>
  );

  // this initial state is just for testing, we will fetch the posts from the API later and set the intial state to an empty array
  const [posts, setPosts] = React.useState(fakePosts);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Forum</Text>
      </View>
      <View style={styles.body}>
        <View style={styles.search}>
          <TextInput
            style={styles.searchInput}
            // onChangeText={(text) => this.setState({ text })}
            // value={this.state.text}
          />
          <TouchableHighlight
            style={styles.searchButton}
            // onPress={this.fetchData}
            underlayColor="#ccc"
          >
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableHighlight>
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
