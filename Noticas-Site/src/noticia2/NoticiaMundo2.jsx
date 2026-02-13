import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

import Header from '../components/header';

export default function NoticiaMundo2({ route, navigation }) {
  const { title, image, content } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Header navigation={navigation} />

      <View style={styles.noticia}>
        <Text style={styles.title}>{title}</Text>
        {image ? <Image source={{ uri: image }} style={styles.image} /> : null}
        <Text style={styles.content}>
          {content || `A medicina global está passando por sua maior transformação em décadas com a integração total de sistemas de Inteligência Artificial Generativa nos protocolos hospitalares de ponta. O que começou como ferramentas de auxílio ao diagnóstico evoluiu para ecossistemas complexos capazes de prever patologias anos antes de os sintomas aparecerem. Em 2026, a FDA nos Estados Unidos e a Agência Europeia de Medicamentos aprovaram o uso massivo de algoritmos autônomos para triagem de câncer e doenças neurodegenerativas, marcando uma ruptura com o modelo tradicional de saúde reativa. Hospitais em Tóquio, Londres e Nova York já operam com "gêmeos digitais" dos pacientes, simulações virtuais que permitem testar tratamentos antes de aplicá-los ao corpo humano.
          \nEssa revolução tecnológica levanta questões profundas sobre ética, privacidade e o papel do médico. No entanto, os resultados são inegáveis: a taxa de sucesso no desenvolvimento de novos fármacos aumentou exponencialmente, reduzindo o tempo de pesquisa de anos para meses. A IA está permitindo a personalização de terapias genéticas em tempo recorde, utilizando a tecnologia CRISPR guiada por supercomputadores para corrigir falhas no DNA com precisão cirúrgica. Além disso, a telemedicina, potencializada por diagnósticos instantâneos via dispositivos vestíveis (wearables), democratizou o acesso a especialistas, permitindo que comunidades em áreas remotas recebam atendimento de qualidade comparável aos grandes centros urbanos. A colaboração entre humanos e máquinas no centro cirúrgico também se tornou padrão, com robôs autônomos realizando suturas complexas sob supervisão humana.
          \nDiante desse cenário, é evidente que a saúde global entrou em uma nova fase de evolução acelerada. A fusão entre biotecnologia e ciência de dados não está apenas salvando vidas, mas redefinindo o que significa envelhecer com qualidade. Contudo, o desafio que permanece para o restante da década é a equidade no acesso a essas inovações. Enquanto as nações desenvolvidas celebram o aumento da expectativa de vida, organismos internacionais como a OMS lutam para garantir que a "medicina algorítmica" não amplie o abismo entre ricos e pobres. O futuro da saúde é brilhante e tecnológico, mas precisa ser, acima de tudo, humano e inclusivo para que seus benefícios sejam verdadeiramente transformadores.
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
