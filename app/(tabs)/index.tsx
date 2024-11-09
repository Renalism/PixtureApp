import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Dimensions, SafeAreaView } from 'react-native';
import { StatusBar } from 'react-native';

const { width } = Dimensions.get('window');
const imageWidth = width / 2 - 20;

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.header}>
        <Image
          source={{ uri: 'data:image/png;base64,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' }} // Replace with your logo URL
          style={styles.logo}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Explore the image you want</Text>
        <Text style={styles.subText}>
          Search for the image or art you want for free without any charges.
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 30,
    paddingBottom: 5,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  textContainer: {
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#006400',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#555',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 5,
    width: imageWidth,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  cardText: {
    padding: 10,
    fontSize: 12,
    color: '#333',
  },
});
