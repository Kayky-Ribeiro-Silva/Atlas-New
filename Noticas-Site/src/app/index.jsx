import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Header from '../components/header';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Principal({ navigation }) {
  const backgroundImage = require('../../assets/cloud.jpg'); 
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem('@tasks');
        if (storedTasks !== null) {
          setTasks(JSON.parse(storedTasks));
        }
      } catch (error) {
        console.log("Erro ao carregar:", error);
      }
    };

    loadTasks();
  }, []);

  const fixedEsporte = [
    {
      id: '1',
      title: "NBA: Boston Celtics consolidam liderança com vitória esmagadora antes do All-Star Game",
      image: "https://admin.cnnbrasil.com.br/wp-content/uploads/sites/12/2024/05/boston_celtics.jpg?w=1200&h=900&crop=0",
      content: "",
      screen: "NoticiaEsporte1"
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
      title: "O Fim das Zonas Mortas: Conectividade Satelital Direta no Celular se Torna Padrão Introdução",
      image: "https://cdn.teletime.com.br/wp-content/uploads/2023/03/Design-sem-nome-1-696x392.jpg",
      content: "",
      screen: "NoticiasTecnologia3"
    },
  ];

  const allEsporte = [...fixedEsporte, ...tasks];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Header navigation={navigation} />

        <FlatList
          data={allEsporte}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.content}
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

      {image ? (
        <Image
          source={{ uri: image }}
          style={styles.newsImage}
        />
      ) : null}

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
  content: {
    paddingHorizontal: 10,
    paddingBottom: 20,
    marginTop: 15
  },
  newsItem: {
    marginBottom: 15,
    backgroundColor: '#ffffffad',
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center',
  },
  newsImage: {
    width: '100%',
    height: 150,
  },
  newsTitle: {
    padding: 8,
    fontSize: 17,
    fontWeight: 'bold',
    shadowColor: '#9b7c3a',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    marginHorizontal: 7
  },
  newsContent:{
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  image:{
    flex: 1, 
    justifyContent: 'center', 
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#fff',
    textAlign: 'center',
  }
});
