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
var ProductList = [{  
  key: 1,  
  name: "Apple iPhone 7 Plus (Jet Black, 128GB)",  
  Price: "Rs. 80,200",  
  Category: "Mobile",  
  imageUrl: require('./images/51Cqn38lCEL.jpg'),  
  CTYPE: "M"  
}, {  
  key: 2,  
  name: "Apple iPhone 6s (Space Grey, 32GB)",  
  Price: "Rs. 40,200",  
  Category: "Mobile",  
  imageUrl: require('./images/71c8c5OWqgL._SL1500_.jpg'),  
  CTYPE: "M"  
}, {  
  key: 3,  
  name: "Samsung Galaxy On8 (Gold, 3 GB RAM + 16 GB Memory)",  
  Price: "Rs. 13,000",  
  Category: "Mobile",  
  imageUrl: require('./images/71mtqsPn0HL._SL1500_.jpg'),  
  CTYPE: "M"  
}, {  
  key: 4,  
  name: "G-Shock Analog-Digital Black Dial Men's Watch - GA-1100-2ADR(G597)",  
  Price: "Rs. 12,009",  
  Category: "Watch",  
  imageUrl: require('./images/910C9-8r6+L._UL1500_.jpg'),  
  CTYPE: "W"  
}, {  
  key: 5,  
  name: "Fastrack New OTS Analog Black Dial Men's Watch",  
  Price: "Rs. 1,500",  
  Category: "",  
  CTYPE: "Watch",  
  imageUrl: require('./images/81r-yEx3I6L._UL1500_.jpg'),  
  CTYPE: "W"  
}, {  
  key: 6,  
  name: "Tommy Hilfiger Men's Cool Sport Analog Display Quartz Blue ",  
  Price: "Rs. 10,000",  
  Category: "Watch",  
  imageUrl: require('./images/91-DKgb4KdL._UL1500_.jpg'),  
  CTYPE: "W"  
}, {  
  key: 7,  
  name: "Fossil Machine Chronograph Black Dial Men's Watch",  
  Price: "Rs. 7,995",  
  Category: "Watch",  
  imageUrl: require('./images/81Op2jBEg8L._UL1500_.jpg'),  
  CTYPE: "W"  
}, {  
  key: 8,  
  name: "boAt Rockerz 510 Wireless Bluetooth Headphones (Black)",  
  Price: "Rs. 1,919",  
  Category: "HeadPhone",  
  imageUrl: require('./images/71FUKZe4cfL._SL1500_.jpg'),  
  CTYPE: "H"  
}, {  
  key: 9,  
  name: "Sony Extra Bass MDR-XB650BT Wireless Headphones (Blue)",  
  Price: "Rs. 6,900",  
  Category: "HeadPhone",  
  imageUrl: require('./images/51ivKj0Wt6L._SL1000_.jpg'),  
  Category: "H"  
}, {  
  key: 10,  
  name: "Sennheiser HD 4.40-BT Bluetooth Headphones (Black)",  
  Price: "Rs. 10,990",  
  Category: "HeadPhone",  
  imageUrl: require('./images/41Ooz6Kj8fL.jpg'),  
  CTYPE: "H"  
}];  

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "A",
      lvDataSource: ProductList
    }
  }
  render() {
    return ( <View style = {
        styles.container
      } > <FlatList data = {
        this.state.lvDataSource
      }
      keyExtractor = {
        (item, index) => 'list-item-${index}'
      }
      renderItem = {
        ({
          item
        }) => <View style = {
          {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center'
          }
        }> <Image source = {
          item.imageUrl
        }
        style = {
          {
            width: 40,
            height: 40,
            margin: (0, 5, 0, 5)
          }
        }/> <View> <Text style = {
          {
            width: 300,
            color: 'darkblue'
          }
        } > {
          item.name
        } </Text> <Text style = {
          {
            width: 300,
            color: 'darkblue'
          }
        } > {
          item.Price
        } </Text> </View> </View>
      }
      /> </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 20
  }
})