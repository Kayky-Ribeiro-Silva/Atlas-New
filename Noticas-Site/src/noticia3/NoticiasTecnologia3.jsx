import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiasTecnologia3({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `A frase "estou sem sinal" está prestes a se tornar uma relíquia linguística. Fevereiro de 2026 marca a consolidação da tecnologia Direct-to-Cell (Direto para o Celular), onde satélites de baixa órbita (LEO) se comunicam diretamente com smartphones comuns, sem a necessidade de antenas parabólicas ou equipamentos especiais. O que começou como um recurso de emergência para SOS em 2024, agora evoluiu para suportar mensagens de texto, voz e dados de baixa latência em praticamente qualquer ponto da superfície terrestre, cobrindo desertos, oceanos e áreas rurais remotas.
          \nAs grandes operadoras de telecomunicações, em parceria com empresas aeroespaciais como a SpaceX (Starlink) e a AST SpaceMobile, ativaram a malha global que elimina as sombras de cobertura das torres terrestres. A tecnologia funciona utilizando frequências de espectro que os celulares já possuem, transformando o céu em uma imensa torre de celular. O impacto social é imenso: agricultores em áreas isoladas do Brasil agora conseguem monitorar colheitas em tempo real via IoT (Internet das Coisas), e viajantes não perdem a conexão mesmo em rodovias afastadas. Diferente da internet via satélite antiga, lenta e cara, a nova constelação de satélites oferece velocidades competitivas para o uso cotidiano, integrando-se transparentemente: o celular alterna entre a torre 5G/6G terrestre e o satélite sem que o usuário perceba a transição.
          \nEsta onipresença da conectividade levanta novas questões sobre o direito à desconexão, mas os benefícios para a segurança e a economia digital são inegáveis. A exclusão digital geográfica, um dos maiores entraves para o desenvolvimento de regiões remotas, está sendo superada pela infraestrutura espacial. Com a infraestrutura física terrestre deixando de ser o único limitador, novos modelos de negócios baseados em conectividade ininterrupta devem surgir, consolidando a internet como um direito universal e acessível, independentemente de onde o usuário esteja no mapa.
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
