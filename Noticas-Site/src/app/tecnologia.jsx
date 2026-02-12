import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from '../components/header';

export default function Tecnologia({ navigation }) {
  return (
    <View style={styles.container}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>

      <Text style={styles.text}>Technology</Text>
      
        <NewsItem
        title="Tecnologia AI estará no centro da Copa do Mundo 2026 com soluções Lenovo‑FIFA"
        image="https://i0.wp.com/jornalgrandebahia.com.br/wp-content/uploads/2026/01/FIFA-e-Lenovo-apresentam-inovacoes-em-inteligencia-artificial-para-a-Copa-do-Mundo-de-2026.jpg?resize=2048%2C1365&quality=30&ssl=1"
        content={`A Lenovo anunciou uma série de soluções tecnológicas baseadas em IA para a Copa do Mundo FIFA 2026™, incluindo avatares digitais em 3D para apoio à arbitragem, inteligência operacional e experiências imersivas para torcedores. A parceria com a FIFA pretende transformar como a competição será operada e assistida mundialmente`}
        />
        <NewsItem 
          title="Samsung anuncia embaixadores de inovação que unem esporte e tecnologia"
          image="https://img.global.news.samsung.com/uk/wp-content/uploads/2026/02/Image-15.jpg"
          content={`No contexto dos Jogos de Inverno de 2026, a Samsung nomeou 10 equipes globais como embaixadores do programa Solve for Tomorrow, destacando projetos que aplicam tecnologia a desafios reais, incluindo esportes e inclusão social.`}
        />
        <NewsItem 
          title="Mega investimentos em SportsTech movimentam mais de US$200 bi globalmente"
          image="https://www.drakestar.com/hubfs/Sports%20Tech%20Cover%20Page.jpg"
          content={`Relatórios recentes indicam que o setor de tecnologia esportiva (SportsTech) registrou mais de US$200 bilhões em negócios e investimentos em 2025, com fusões, financiamentos e parcerias impulsionando a convergência entre tecnologia, esporte e mídia.`}
        />
        <NewsItem
          title="Samsung começa a enviar HBM4, o chip de memória mais avançado da indústria"
          image="https://www.infomoney.com.br/wp-content/uploads/2025/10/2025-10-31T122049Z_1_LYNXMPEL9U0N4_RTROPTP_4_SAMSUNG-ELEC-NVIDIA.jpg?w=2048&quality=70&strip=all"
          content={`A Samsung Electronics anunciou que iniciou a produção em massa e o envio do HBM4, considerado o chip de memória de alta largura de banda mais poderoso disponível no mercado atualmente. O lançamento ocorre em um momento em que a demanda por soluções avançadas de memória para aplicações de Inteligência Artificial (IA) está aumentando rapidamente, e o novo produto posiciona a Samsung à frente na corrida por tecnologias de processamento acelerado. Analistas acreditam que essa iniciativa pode fortalecer a posição da Samsung no mercado global de semicondutores, especialmente depois de períodos em que a empresa ficou atrás de concorrentes em gerações anteriores de memória de alta performance.`}
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

