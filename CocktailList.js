// CocktailList.js
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

const CocktailList = ({ navigation }) => {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    fetchCocktails();
  }, []);

  const fetchCocktails = async () => {
    try {
      const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=i');
      setCocktails(response.data.drinks);
    } catch (error) {
      console.error(error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('CocktailDetail', { cocktail: item })}>
      <Text style={styles.itemTitle}>{item.strDrink}</Text>
      <Image
        style={styles.itemImage}
        source={{
          uri: item.strDrinkThumb,
        }}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cocktails}
        renderItem={renderItem}
        keyExtractor={(item) => item.idDrink}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    paddingHorizontal: 16,
  },
  itemContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    fontSize: 18,
    color: '#000',
  },
  itemImage: {
    width: 50,
    height: 50,
  },
});

export default CocktailList;

