import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import Header from '../components/header';

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>
        <NewsItem
        title="eleção Nacional vence campeonato internacional em final histórica"
        />
        <NewsItem 
          title="Países firmam novo acordo ambiental para reduzir emissões até 2035"
        />
        <NewsItem 
          title="Nova geração de inteligência artificial transforma mercado de trabalho" 
        />
      </ScrollView>
    </View>
  );
}

function NewsItem({ image, title, content }) {
  return (
    <View style={styles.newsItem}>
      <Text style={styles.newsTitle}>{title}</Text>
      {image && <Image source={{ uri: image }} style={styles.newsImage} />}
      {content && <Text style={styles.newsContent}>{content}</Text>}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b9e82',
  },
  content: {
    paddingTop: 70,
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 15
  },
  newsItem: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
  },
  newsImage: {
    width: '100%',
    height: 120,
  },
  newsTitle: {
    padding: 8,
    fontSize: 14,
    fontWeight: 'bold',
  },
  newsContent:{
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
});
