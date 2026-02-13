import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/header';

export default function Tecnologia({ navigation }) {

  const backgroundImage = require('../../assets/cloud.jpg');

  const [tasks, setTasks] = useState([]);

  const fixedTecnologia = [
    {
      id: '1',
      title: "A Era dos Agentes de IA: Assistentes Autônomos Redefinem o Trabalho Corporativo Introdução",
      image: "https://fastcompanybrasil.com/wp-content/webp-express/webp-images/uploads/2026/01/agentes-de-IA_KV-768x432.jpg.webp",
      content: "",
      screen: "NoticiasTecnologia1"
    },
    {
      id: '2',
      title: "Baterias de Estado Sólido Chegam aos Smartphones Intermediários Introdução",
      image: "https://china.org.br/wp-content/uploads/2025/11/chery-bateria-estado-solido-696x391.webp",
      content: "",
      screen: "NoticiasTecnologia2"
    },
    {
      id: '3',
      title: "O Fim das Zonas Mortas: Conectividade Satelital Direta no Celular se Torna Padrão Introdução",
      image: "https://cdn.teletime.com.br/wp-content/uploads/2023/03/Design-sem-nome-1-696x392.jpg",
      content: "",
      screen: "NoticiasTecnologia3"
    },
  ];


  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('@tasks');
        if (storedTasks) {
          const parsed = JSON.parse(storedTasks);
          if (Array.isArray(parsed)) {
            setTasks(parsed);
          }
        }
      } catch (error) {
        console.log("Erro ao carregar tarefas:", error);
      }
    };

    loadTasks();
  }, []);

  const allTecnologia = [...fixedTecnologia, ...tasks];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Header navigation={navigation} />

        <FlatList
          data={allTecnologia}
          keyExtractor={(item) => item.id} // melhor usar o id
          contentContainerStyle={styles.content}
          ListHeaderComponent={<Text style={styles.text}>Tecnologia</Text>}
          renderItem={({ item }) => (
            <NewsItem
              navigation={navigation}
              title={item.title}
              image={item.image}
              content={item.content}
              screen={item.screen} // <-- aqui
            />
          )}
        />

      </ImageBackground>
    </View>
  );
}

function NewsItem({ image, title, content, navigation, screen }) {
  return (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() =>
        navigation.navigate(screen, { title, image, content })
      }
    >
      <Text style={styles.newsTitle}>{title}</Text>

      {image && (
        <Image
          source={{ uri: image }}
          style={styles.newsImage}
        />
      )}

      <Text style={styles.newsContent}>
        {content ? content.slice(0, 100) + "..." : ""}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b9e82',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  content: {
    paddingTop: 30,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  newsItem: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
  },
  newsImage: {
    width: '100%',
    height: 120,
  },
  newsTitle: {
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 16,
    fontWeight: '700',
    color: '#222',
  },
  newsContent: {
    marginVertical: 12,
    marginHorizontal: 10,
    fontSize: 14,
    color: '#333',
    textAlign: 'justify',
  },
  text: {
    fontWeight: '900',
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 25,
    color: '#fff'
  }
});
