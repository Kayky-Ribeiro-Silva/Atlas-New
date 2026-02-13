import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiaEsporte2({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `Em uma noite que ficará gravada na memória dos "Colchoneros", o Atlético de Madrid protagonizou uma das atuações mais dominantes da era Diego Simeone, goleando o Barcelona por 4 a 0 no Estádio Cívitas Metropolitano. O que se esperava ser um duelo equilibrado entre gigantes do futebol espanhol transformou-se em um monólogo vermelho e branco. A atmosfera no estádio era ensurdecedora, com a torcida sentindo, desde os primeiros minutos, que a equipe estava possuída por uma determinação feroz. O Barcelona, apático e desorganizado, não encontrou respostas para a intensidade física e a precisão cirúrgica dos donos da casa, sofrendo uma derrota que certamente levantará questionamentos sobre o futuro do comando técnico catalão.
          \nO massacre começou cedo. Aproveitando-se de uma saída de bola errada da defesa do Barcelona, Antoine Griezmann abriu o placar aos 12 minutos com um toque sutil por cima do goleiro, aplicando a famosa "lei do ex". O gol desestabilizou completamente o time visitante, que viu suas linhas de passe serem cortadas pela marcação alta do Atlético. Ainda no primeiro tempo, em um contra-ataque fulminante, Llorente ampliou para 2 a 0. O segundo tempo trouxe um Barcelona tentando se lançar ao ataque, mas deixando avenidas em sua retaguarda. Foi então que a eficácia do "Cholismo" brilhou: dois gols rápidos em jogadas de bola parada e transição rápida transformaram a vitória em humilhação. A defesa do Atlético, liderada por Giménez, foi intransponível, anulando Lewandowski e Lamine Yamal, que pouco tocaram na bola. O quarto gol, marcado nos acréscimos, foi a cereja no bolo, levando a torcida ao delírio absoluto.
          \nEste 4 a 0 não apenas soma três pontos na tabela, mas altera a dinâmica de poder em La Liga. O Atlético de Madrid prova que está vivo na briga pelo título e que o Metropolitano é uma fortaleza onde poucos sobrevivem. Para o Barcelona, o resultado é desastroso e exige uma reflexão imediata sobre o planejamento tático e a postura dos jogadores em jogos grandes. A imprensa espanhola já classifica a partida como "O Desastre de Madrid" para os catalães, enquanto para Simeone, é a reafirmação de que seu estilo de jogo, quando bem executado, ainda é letal contra equipes que priorizam a posse de bola sem objetividade. A liga espanhola ganha um novo capítulo de emoção com este resultado impactante.
          `}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#111',
  },
  title: { 
    fontWeight: '900',
    fontSize: 22, 
    textAlign: 'center', 
    marginBottom: 25, 
    color: '#111',
  },
  image: { 
    width: '100%', 
    height: 200, 
    marginBottom: 15,
    borderRadius: 8,
  },
  content: { 
    marginTop: 15,
    marginBottom: 15,
    marginHorizontal: 15,
  },
  noticia: { 
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 15,
  },
});
