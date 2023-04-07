import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CocktailDetail = ({ route }) => {
  const { cocktail } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{cocktail.strDrink}</Text>
      <Text style={styles.subtitle}>Instructions:</Text>
      <Text style={styles.instructions}>{cocktail.strInstructions}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
    });

export default CocktailDetail;