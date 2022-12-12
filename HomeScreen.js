const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Forum</Text>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
};

export default HomeScreen;
