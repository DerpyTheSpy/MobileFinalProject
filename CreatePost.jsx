import React from 'react';
import { View, TextInput, Button } from 'react-native';

const CreatePostForm = () => {
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const handleSubmit = () => {
    // Do something with the post, e.g. send it to a server
    console.log({
      title,
      body,
    });
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Body" value={body} onChangeText={setBody} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default CreatePostForm;
