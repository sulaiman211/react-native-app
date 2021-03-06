import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import Screen from '../components/Screen';

const listings = [
  {
    id: 1,
    title: 'Old novel for sale',
    price: 10,
    image: require('../assets/novel.jpg'),
  },
  {
    id: 2,
    title: 'Book in great condition',
    price: 12,
    image: require('../assets/book.jpg'),
  },
];

function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
