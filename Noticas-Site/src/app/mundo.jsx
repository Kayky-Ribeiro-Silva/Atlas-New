import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

import Header from '../components/header';

export default function Mundo({ navigation }) {
  return (
    <View style={styles.container}>

      <Header navigation={navigation} />

      <ScrollView contentContainerStyle={styles.content}>

      <Text style={styles.text}>World</Text>
      
        <NewsItem
          title="Elon Musk publica conteúdo racial extremista com frequência, dizem especialistas"
          image="https://i.guim.co.uk/img/media/be8a11d2bcb35fcac2b8282812b36fcd33fdbae1/0_0_2790_2232/master/2790.jpg?width=620&dpr=1&s=none&crop=none"
          content={`Especialistas em extremismo analisaram que Elon Musk publicou mensagens relacionadas a raça e supremacia branca em suas redes sociais quase diariamente em janeiro de 2026. Os posts incluem alegações conspiratórias sobre “ameaças à raça branca” e teorias anti‑imigrantes, provocando grande controvérsia e críticas de grupos contra discurso de ódio.`}
      
        />
        <NewsItem 
          title="Mercado global de tecnologia vê SoftBank voltar à lucratividade com IA"
          image="https://uploads.startups.com.br/2025/05/403aRdvu-shutterstock_1788782441-1024x683.webp"
          content={`O conglomerado japonês SoftBank Group voltou a obter lucro no último período financeiro, impulsionado por seus investimentos em empresas de inteligência artificial e tecnologia, revertendo perdas registradas no ano anterior — um sinal positivo para o setor tecnológico global.`}
        />
        <NewsItem 
          title="Principais notícias globais destacam política, economia e eventos ao vivo"
          image="https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2022/11/32mz33e-preview.jpg"
          content={`Portais internacionais mostram que líderes mundiais continuam debatendo questões como segurança global, mudanças econômicas e eventos esportivos de grande impacto, como Olimpíadas e futuros campeonatos, moldando a agenda global de hoje.`}
        />
        <NewsItem
          title="Cazaquistão cria fundo nacional de IA e convoca referendo constitucional"
          image="https://omundodiplomatico.com.br/wp-content/uploads/2025/10/3acc2e94-cc68-4c9f-b838-31baa85b4a88-750x375.jpg"
          content={`O Cazaquistão anunciou a criação de um fundo nacional de Inteligência Artificial (IA) financiado pelo Banco Nacional, com o objetivo de impulsionar projetos digitais e educacionais que possam gerar retorno econômico e fortalecer o setor tecnológico no país. O vice‑primeiro‑ministro Zhaslan Madiev disse que os investimentos podem render até cinco vezes o aporte inicial e representar até 1,5% do PIB anual, integrando a IA ao novo modelo de crescimento econômico da nação. Além disso, o governo definiu 15 de março como data para um referendo sobre uma nova constituição, que propõe a transformação do parlamento bicameral em um único órgão legislativo e a reinstauração da vice‑presidência, abrindo caminho para que o presidente Kassym‑Jomart Tokayev possa concorrer a mais um mandato de sete anos.`}
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

