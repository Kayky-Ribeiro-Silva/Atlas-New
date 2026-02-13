import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/header';

export default function Mundo({ navigation }) {

  const backgroundImage = require('../../assets/cloud.jpg');

  const [tasks, setTasks] = useState([]);

  const fixedMundo = [
    {
      id: '1',
      title: "A Revolução Energética: Hidrogênio Verde se Consolida como Pilar da Economia Global Introdução",
      image: "https://portal.comunique-se.com.br/wp-content/uploads/2024/07/a3c693d2-8174-4016-8799-e5d08ca440df-740x740.jpg",
      content: "",
      screen: "NoticiaMundo1"
    },
    {
      id: '2',
      title: "Inteligência Artificial na Saúde: A Nova Era da Medicina Preditiva e Personalizada Introdução",
      image: "https://jpimg.com.br/uploads/2025/05/2151111143-675x450.jpg",
      content: "",
      screen: "NoticiaMundo2"
    },
    {
      id: '3',
      title: "Geopolítica Espacial: A Corrida pela Lua Aquece com Novos Atores Internacionais Introdução",
      image: "https://conteudo.imguol.com.br/c/noticias/f4/2019/07/11/o-americano-buzz-aldrin-foi-um-dos-austronautas-caminhou-sobre-a-lua-1562847813187_v2_900x506.jpg",
      content: "",
      screen: "NoticiaMundo3"
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

  const allMundo = [...fixedMundo, ...tasks];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Header navigation={navigation} />

        <FlatList
          data={allMundo}
          keyExtractor={(item) => item.id} // melhor usar o id
          contentContainerStyle={styles.content}
          ListHeaderComponent={<Text style={styles.text}>Tecnologia</Text>}
          renderItem={({ item }) => (
            <NewsItem
              navigation={navigation}
              title={item.title}
              image={item.image}
              content={item.content}
              screen={item.screen} 
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
