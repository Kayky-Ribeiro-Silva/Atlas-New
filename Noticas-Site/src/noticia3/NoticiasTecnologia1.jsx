import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiasTecnologia1({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `Neste início de 2026, o mercado de trabalho global atravessa sua maior transformação desde a popularização da internet. O lançamento das novas versões de modelos de linguagem pelas grandes <i>big techs</i> marcou o fim dos "chatbots" passivos e o início da era dos "Agentes de IA Autônomos". Diferente das IAs de 2024, que apenas respondiam perguntas ou geravam textos sob demanda, os novos sistemas operacionais integrados agora possuem a capacidade de executar tarefas complexas de ponta a ponta sem supervisão humana constante, alterando drasticamente a rotina administrativa de empresas na América do Norte, Europa e, crescentemente, no Brasil.
          \nA tecnologia, que amadureceu rapidamente nos últimos 18 meses, permite que um único software gerencie agendas, negocie preços com fornecedores via e-mail, agende reuniões conciliando fusos horários e até realize a contabilidade básica, emitindo notas fiscais automaticamente. Um relatório recente da consultoria Gartner aponta que 45% das tarefas burocráticas em grandes corporações já são delegadas a agentes digitais. O diferencial técnico atual é a "memória persistente" e o raciocínio sequencial; o agente não "esquece" o contexto de um projeto após o fechamento da janela de chat e consegue corrigir seus próprios erros antes de entregar o resultado final. No entanto, essa eficiência traz debates acalorados sobre a privacidade de dados corporativos e a necessidade urgente de requalificação da força de trabalho, visto que funções de secretariado e assistência administrativa estão sendo rapidamente absorvidas.
          \nEspecialistas concordam que 2026 será o ano da regulação desses agentes autônomos. Enquanto a produtividade atinge picos históricos, permitindo que empresas operem com estruturas mais enxutas, o desafio humano permanece central. A tecnologia deixou de ser uma ferramenta de suporte para se tornar um "colega de trabalho" virtual, exigindo que os profissionais desenvolvam habilidades de curadoria e gestão de IA, em vez de execução manual. O cenário atual dita: quem souber orquestrar agentes dominará o mercado; quem apenas executar tarefas repetitivas corre riscos reais de obsolescência.
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
