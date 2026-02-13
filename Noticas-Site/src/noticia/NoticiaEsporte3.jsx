import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiaEsporte3({ route, navigation }) {
  const { title, image, content } = route.params;

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
          <Header navigation={navigation} />
    
          <View style={styles.noticia}>
            <Text style={styles.title}>{title}</Text>
            {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
            <Text style={styles.content}>
              {content || `A corrida pelo título da Premier League sofreu uma reviravolta dramática neste fim de semana, com o Arsenal deixando escapar pontos preciosos ao empatar em 1 a 1 contra o Brentford no Emirates Stadium. Em uma tarde de frustração no norte de Londres, os Gunners, que precisavam da vitória para manter a distância segura em relação ao Manchester City, encontraram um adversário taticamente disciplinado e perigoso nas bolas paradas. O clima, que começou festivo com a torcida cantando alto, transformou-se em tensão e ansiedade à medida que o relógio avançava e a equipe da casa não conseguia furar o bloqueio defensivo dos "Bees". O resultado é um balde de água fria nas aspirações do time de Mikel Arteta, que agora vê sua margem de erro reduzida a zero.
              \nO jogo foi um clássico ataque contra defesa. O Arsenal dominou a posse de bola, circulando a área do Brentford incansavelmente, com Saka e Martinelli tentando criar espaços pelas pontas. O gol finalmente saiu no segundo tempo, através de uma jogada trabalhada que culminou na finalização de Leandro Trossard, trazendo alívio momentâneo às arquibancadas. No entanto, a resiliência do Brentford é conhecida na liga. Poucos minutos após o gol do Arsenal, em uma jogada confusa na área que gerou muita reclamação sobre um possível impedimento não revisado adequadamente pelo VAR, Ivan Toney cabeceou para o fundo das redes, empatando a partida. Nos minutos finais, o Arsenal se lançou desesperadamente ao ataque, mas esbarrou na atuação inspirada do goleiro David Raya e na própria falta de precisão nas finalizações.
              \nO apito final trouxe vaias tímidas misturadas com aplausos de incentivo, mas a linguagem corporal dos jogadores do Arsenal denotava o tamanho do prejuízo. Empatar em casa contra equipes do meio da tabela é o tipo de deslize que costuma custar caro na Premier League, especialmente quando se tem o Manchester City na perseguição. Mikel Arteta, em sua entrevista pós-jogo, lamentou a falta de "killer instinct" (instinto matador) para fechar o jogo quando estavam em vantagem e criticou a arbitragem pelo lance do gol de empate. Agora, a equipe precisará demonstrar força mental para se recuperar imediatamente na próxima rodada, sob o risco de ver a liderança escapar de suas mãos nas semanas decisivas do campeonato.
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
