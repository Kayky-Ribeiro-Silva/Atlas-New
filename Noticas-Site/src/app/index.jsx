import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

import Header from './components/header';

export default function Principal({ navigation }) {
  return (
    <View style={styles.container}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>
        <NewsItem
          title="Labubu Conquista as Telonas: Miniatura de Pelúcia Ganha Filme Próprio"
        />
        <NewsItem 
          title="Ataque em mesquita no Paquistão deixa dezenas de mortos e feridos"
        />
        <NewsItem 
          title="Mercado de tecnologia em queda devido a receios com IA" 
        />
        <NewsItem 
          title="Manchester City vence o Liverpool por 2 a 1 em grande duelo" 
        />
        <NewsItem 
          title="Nova ferramenta de inteligência artificial promete aumentar a produtividade no trabalho"
        />
        <NewsItem 
          title="Líderes mundiais se reúnem para discutir mudanças climáticas e segurança global"
        />
      </ScrollView>
    </View>
  );
}

function NewsItem({ image, title }) {
  return (
    <View style={styles.newsItem}>
      {image && <Image source={{ uri: image }} style={styles.newsImage} />}
      <Text style={styles.newsTitle}>{title}</Text>
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
});
