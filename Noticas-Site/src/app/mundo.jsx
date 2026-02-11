import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/header';

export default function Mundo({navigation}) {
  return ( 
    <View style={styles.container}>
      <Header navigation={navigation} />

   
      <Text style={styles.text}>Página do Mundo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b9e82',
  },
  text: { 
    fontSize: 20, 
    fontWeight: 'bold',
  },
});


