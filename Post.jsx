import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';

export default function Post({ route }) {
  const { id, author, title, content } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.postContainer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{content}</Text>
      </View>

      <View style={styles.leaveCommentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Leave a comment..."
        />
        <Button title="Submit" />
      </View>

      <View style={styles.commentContainer}>
        <Text style={styles.commentAuthor}>Comment Author</Text>
        <Text style={styles.commentBody}>Comment Body</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  postContainer: {
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 16,
  },
  author: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  body: {
    fontSize: 16,
    marginBottom: 16,
  },
  commentContainer: {
    padding: 16,
    backgroundColor: '#eee',
    marginBottom: 16,
  },
  commentAuthor: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  },
  commentBody: {
    fontSize: 16,
  },
});
