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

export default function Post({ route }) {
  const { id } = route.params;

  return (
    <View>
      <Text>You pressed the element with id: {id}</Text>
    </View>
  );
}
