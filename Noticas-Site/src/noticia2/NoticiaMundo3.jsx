import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiaMundo3({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `Neste início de 2026, o mundo testemunha um ponto de inflexão histórico no setor energético, marcado pela consolidação definitiva do Hidrogênio Verde (H2V) como a "commoditie do futuro". Após anos de especulação e projetos piloto, as grandes potências econômicas, em conjunto com nações emergentes ricas em recursos naturais, começaram a operar as primeiras megaplantas industriais de produção em escala global. O que antes era visto como uma promessa distante para a descarbonização, agora dita o ritmo das bolsas de valores e reestrutura as rotas comerciais marítimas, com a Europa e a Ásia disputando contratos de longo prazo com produtores da América Latina e da África, sinalizando o fim gradual, mas acelerado, da hegemonia absoluta dos combustíveis fósseis.
          \nO desenvolvimento dessa tecnologia atingiu um novo patamar de eficiência graças à redução drástica nos custos dos eletrolisadores e ao aumento da capacidade de geração eólica e solar. Países como o Brasil, Chile e Namíbia, que investiram pesadamente em infraestrutura nos últimos cinco anos, estão agora colhendo os frutos, exportando amônia verde para portos em Roterdã e Hamburgo. Relatórios recentes da Agência Internacional de Energia indicam que o custo de produção do H2V caiu cerca de 40% em comparação a 2023, tornando-o competitivo para indústrias pesadas, como a siderurgia e o transporte marítimo. Além disso, a implementação de "corredores verdes" no Atlântico e no Pacífico está forçando uma adaptação geopolítica, onde a segurança energética não depende mais apenas de oleodutos, mas de cabos submarinos e frotas de navios adaptados para transportar hidrogênio líquido.
          \nConclui-se, portanto, que a transição energética deixou de ser apenas uma pauta ambiental para se tornar o centro da estratégia econômica global. A corrida pelo Hidrogênio Verde não apenas redefine as alianças internacionais, criando um novo eixo de poder entre o Sul Global e as potências industriais do Norte, mas também oferece a única chance realista de cumprir as metas climáticas estabelecidas para 2030. Enquanto os governos correm para adaptar suas legislações e subsídios, a mensagem para o mercado é clara: quem não se adaptar à nova matriz energética corre o risco de obsolescência imediata. O ano de 2026 será lembrado nos livros de história como o ano em que a economia global finalmente começou a respirar novos ares.
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
