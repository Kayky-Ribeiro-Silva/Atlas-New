import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/header';

export default function Esporte({ navigation }) {

  const backgroundImage = require('../../assets/cloud.jpg');

  const [tasks, setTasks] = useState([]);

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
      title: "Copa do Rei: Atlético de Madrid atropela o Barcelona em noite histórica no Metropolitano (4-0)",
      image: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1024,h_682,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_pt-BR_international_web%2F01kh9vrhgk6x2yt9xp64.jpg",
      content: "",
      screen: "NoticiaEsporte2"
    },
    {
      id: '3',
      title: "Premier League: Arsenal tropeça em casa e empata com o Brentford (1-1)",
      image: "data:image/jpeg;base64,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",
      content: "",
      screen: "NoticiaEsporte3"
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

  const allEsporte = [...fixedEsporte, ...tasks];

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <Header navigation={navigation} />

        <FlatList
          data={allEsporte}
          keyExtractor={(item) => item.id}
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
