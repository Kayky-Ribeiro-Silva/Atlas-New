import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiasTecnologia2({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `O pesadelo de carregar o celular duas vezes ao dia parece estar chegando ao fim definitivo. O que antes era uma tecnologia exclusiva de carros elétricos de luxo ou protótipos de laboratório finalmente atingiu a escala comercial para eletrônicos de consumo. As principais fabricantes asiáticas anunciaram nesta semana a primeira linha global de smartphones intermediários equipados com baterias de estado sólido (Solid-State Batteries), prometendo revolucionar a autonomia dos dispositivos móveis e reduzir drasticamente o lixo eletrônico gerado pelo desgaste precoce de componentes de íons de lítio tradicionais.
          \nA grande inovação reside na substituição do eletrólito líquido por um material sólido, o que não apenas aumenta a densidade energética em até 60% — permitindo baterias menores com a mesma capacidade ou baterias do mesmo tamanho com durações de até 3 dias —, mas também elimina quase totalmente o risco de superaquecimento e incêndio. Nos testes de bancada divulgados, os novos aparelhos conseguiram reter 95% de sua capacidade original mesmo após 2.000 ciclos de carga, o que equivale a cerca de cinco anos de uso intenso. Além disso, a velocidade de carregamento atingiu um novo patamar: ir de 0% a 80% agora leva menos de 9 minutos, sem o aquecimento excessivo que degradava as baterias antigas. Isso é viabilizado por novos compostos cerâmicos que facilitam o fluxo de íons de forma mais estável.
          \nA democratização das baterias de estado sólido em 2026 sinaliza uma mudança de paradigma na indústria mobile. Com ciclos de vida mais longos, a tendência é que os consumidores troquem de aparelho com menos frequência, pressionando as fabricantes a inovarem em software e serviços, já que o hardware se tornou extremamente durável. Para o consumidor final, o benefício é imediato: liberdade das tomadas e dispositivos mais seguros. O próximo passo, segundo analistas, é a aplicação dessa mesma tecnologia em laptops e wearables ainda no segundo semestre deste ano.
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
