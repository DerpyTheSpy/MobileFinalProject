import React, {  
  Component  
} from 'react';  
import {  
  StyleSheet,  
  Text,  
  TextInput,  
  FlatList,  
  Image,  
  Picker,  
  TouchableHighlight,  
  View  
} from 'react-native';  

//forum app

export default class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      data: [],
      text: '',
      pickerValue: '1',
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://www.reddit.com/r/' + this.state.text + '.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          data: responseJson.data.children,
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Reddit Forum</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.search}>
            <TextInput
              style={styles.searchInput}
              onChangeText={text => this.setState({text})}
              value={this.state.text}
            />
            <TouchableHighlight
              style={styles.searchButton}
              onPress={this.fetchData}
              underlayColor="#ccc">
              <Text style={styles.searchButtonText}>Search</Text>
            </TouchableHighlight>
          </View>
          <FlatList
            data={this.state.data}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Image
                  style={styles.itemImage}
                  source={{uri: item.data.thumbnail}}
                />
                <View style={styles.itemText}>
                  <Text style={styles.itemTitle}>{item.data.title}</Text>
                  <Text style={styles.itemAuthor}>
                    {item.data.author} - {item.data.score}
                  </Text>
                </View>
              </View>
            )}
            keyExtractor={item => item.data.id}
          />
        </View>
      </View>
    );
  }
}

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
    fontWeight: 'bold',
  },
  itemAuthor: {
    fontSize: 12,
    color: '#999',
  },
});

