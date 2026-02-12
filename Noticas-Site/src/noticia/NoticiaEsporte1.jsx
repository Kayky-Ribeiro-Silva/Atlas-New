import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NewsDetail({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container}>
        <Header navigation={navigation} />

        <View style={styles.noticia}>
            <Text style={styles.title}>{title}</Text>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
            <Text style={styles.content}>{content}Vladyslav Heraskevych, atleta ucraniano de skeleton, foi desclassificado dos Jogos Olímpicos de Inverno de 2026 depois de querer usar um “capacete de memória” com imagens de atletas e crianças mortos durante a invasão russa. A decisão veio instantes antes de sua competição, provocando forte crítica pública e um embate com o Comitê Olímpico Internacional (COI), que afirmou que símbolos políticos não são permitidos em competições oficiais.</Text>
        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#6b9e82',
},
  title: { 
    fontWeight: '900',
    fontSize: 22, 
    textAlign: 'center', 
    marginBottom: 25, 
    color: '#111' 
},
  image: { 
    width: '100%', 
    height: 200, 
    marginBottom: 15 
},
  content: { 
    marginVertical: 12,
    marginHorizontal: 10,
    fontSize: 14,            
    fontWeight:    '400',       
    lineHeight: 20, 
    color: '#333',         
    textAlign: 'justify',
},
  noticia: { 
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
},
});
