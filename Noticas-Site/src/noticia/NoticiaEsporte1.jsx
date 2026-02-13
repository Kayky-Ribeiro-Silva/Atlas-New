import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiaEsporte1({ route, navigation }) {
  const { title, image, content } = route.params;
  
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `A temporada regular da NBA atingiu um novo nível de intensidade na noite passada, com o Boston Celtics reafirmando sua posição como a equipe a ser batida na Conferência Leste. Em um confronto eletrizante no TD Garden, a equipe da casa não apenas venceu, mas dominou completamente o jogo, enviando uma mensagem clara aos rivais poucas semanas antes da pausa para o All-Star Game. O clima na arena era de puro êxtase, com a torcida empurrando a equipe desde o primeiro minuto, ciente de que esta temporada carrega as expectativas de mais um banner de campeonato para a histórica franquia. A vitória não foi apenas um número na tabela, mas uma demonstração de força coletiva e maturidade tática que deixou os analistas impressionados.
          \nO destaque da partida foi, inevitavelmente, a dupla dinâmica formada por Jayson Tatum e Jaylen Brown. Tatum, jogando com a fluidez de um MVP, anotou 38 pontos, controlando o ritmo do jogo e desmantelando a defesa adversária com arremessos de longa distância e infiltrações agressivas. Brown, por sua vez, foi o pilar defensivo e o motor dos contra-ataques, somando 25 pontos e 8 rebotes. O diferencial do Celtics, no entanto, foi a profundidade do elenco. A rotação funcionou perfeitamente, com os jogadores vindos do banco mantendo a intensidade defensiva, o que permitiu que os titulares descansassem sem que a vantagem no placar diminuísse. O técnico Joe Mazzulla foi elogiado na coletiva de imprensa por seus ajustes rápidos no terceiro quarto, neutralizando a tentativa de reação do adversário e garantindo que o último período fosse meramente protocolar. As estatísticas de aproveitamento de três pontos beiraram os 45%, um número que torna a equipe de Boston praticamente imbatível em noites inspiradas.
          \nCom este resultado, o Boston Celtics amplia sua vantagem na liderança do Leste e coloca pressão extra sobre o Milwaukee Bucks e o Philadelphia 76ers, que tentam acompanhar o ritmo frenético imposto pelos líderes. A vitória serve como um tônico moral fundamental antes da pausa da temporada, permitindo que a equipe recarregue as energias com a confiança em alta. Para os torcedores, a performance de ontem à noite solidifica a crença de que este grupo tem tudo o que é necessário para levantar o troféu Larry O'Brien em junho. Resta saber se conseguirão manter a saúde física e a consistência mental nos playoffs, mas, por enquanto, Boston é, indiscutivelmente, a capital do basquete mundial.
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
    fontSize: 14,            
    fontWeight: '400',       
    lineHeight: 20, 
    color: '#333',         
    textAlign: 'justify',
  },
  noticia: { 
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    padding: 15,
  },
});
