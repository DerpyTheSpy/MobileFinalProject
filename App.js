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
  const [searchText, setSearchText] = useState('');
  const [fakePosts, setFilteredData] = useState(data);

  const onSearch = (text) => {
    setSearchText(text);
    const searchTerm = text.toLowerCase();
    const filteredItems = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filteredItems);
  };
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
          onChangeText={onSearch}
          value={searchText}
          placeholder="Search"
        />
        <MyList data={data} />
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
    searchInput: {
      padding: 16,
    },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
