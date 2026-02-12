import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from '../components/header';

export default function Esporte({ navigation }) {
  return (
    <View style={styles.container}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>

      <Text style={styles.text}>Esporte</Text>
      
        <NewsItem
            navigation={navigation}
            title="Ucraniano é desclassificado nos Jogos de Inverno"
            image="https://i.guim.co.uk/img/media/7efd3a44250d4aeae8279e63483b76e11f848b57/0_1576_5464_4369/master/5464.jpg?width=620&dpr=1&s=none&crop=none"
            content=""
        />
        <NewsItem 
          title="Big 12 apresenta piso de basquete com tecnologia LED em torneio"
          image="https://ogden_images.s3.amazonaws.com/www.heraldextra.com/images/2026/02/11112508/Big-12-floor-2-840x480.jpg"
          content={`O torneio de basquete do Big 12 Conference nos Estados Unidos irá utilizar piso interativo com tecnologia de LED, permitindo gráficos digitais em tempo real durante jogos. A tecnologia será exibida em março no T-Mobile Center, em Kansas City, com visualizações dinâmicas para fãs e potencial aumento de envolvimento e receita.`}
        />
        <NewsItem 
          title="Seleção de baseball do Kansas busca evolução na temporada 2026" 
          image="https://ogden_images.s3.amazonaws.com/www.ljworld.com/images/2025/10/20144102/20251011_Baseball_Bradley_AKH_180-1100x733.jpg"
          content={`O time de baseball da Universidade do Kansas está focado em redefinir sua formação para 2026 após uma temporada de recordes em 2025. Com poucos jogadores retornando, os novos talentos prometem competir intensamente para levar a equipe novamente à pós‑temporada e atrair olheiros profissionais.`}
        />
        <NewsItem 
          title="Atletas globais são nomeados em programa esportivo‑tecnológico do Samsung/COI" 
          image="https://img.global.news.samsung.com/uk/wp-content/uploads/2026/02/Image-14.jpg"
          content={`Durante os Jogos Olímpicos de Inverno Milano Cortina 2026, o escritório de cidadania corporativa da Samsung nomeou 10 embaixadores globais no programa Solve for Tomorrow, destacando jovens inovadores focados em soluções que unem esporte e tecnologia para impacto social e sustentabilidade.`}
        />
      </ScrollView>
    </View>
  );
}

function NewsItem({ image, title, content, navigation }) {
  return (
    <TouchableOpacity
      style={styles.newsItem}
      onPress={() => navigation.navigate('NewsDetail', { title, image, content })}
    >
      <Text style={styles.newsTitle}>{title}</Text>
      {image && <Image source={{ uri: image }} style={styles.newsImage} />}
      <Text style={styles.newsContent}>{content.slice(0, 100)}...</Text> {/* só prévia */}
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b9e82',
  },
  content: {
    paddingTop: 30,
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
    paddingHorizontal: 10,
    paddingTop: 10,
    fontSize: 16,           
    fontWeight: '700',      
    color: '#222',          
    lineHeight: 22,         
  },
  newsContent:{
    marginVertical: 12,
    marginHorizontal: 10,
    fontSize: 14,            
    fontWeight: '400',       
    lineHeight: 20, 
    color: '#333',         
    textAlign: 'justify',   
  },
  text:{
    fontWeight: '900',
    fontSize: 22, 
    textAlign: 'center', 
    marginBottom: 25, 
    color: '#111' 
  }
});
