import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Pressable } from 'react-native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';

export default function Header({ navigation }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [perfilAberto, setPerfilAberto] = useState(false);

  return (
    <View style={styles.container}>
   
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>Atlas News</Text>

        <TouchableOpacity onPress={() => setPerfilAberto(true)}>
          <Ionicons name="person-circle-outline" size={45} color="#fff" />
        </TouchableOpacity>
      </View>

      {menuOpen && (
        <View style={styles.sidebar}>
          <MenuItem icon="home" text="Home" onPress={() => navigation.navigate("Principal")} />
          <MenuItem icon="football" text="Esporte" onPress={() => navigation.navigate("Esporte")} />
          <MenuItem icon="globe" text="Mundo" onPress={() => navigation.navigate("Mundo")} />
          <MenuItem icon="code-slash" text="Tecnologia" onPress={() => navigation.navigate("Tecnologia")} />
        </View>
      )}

      <Modal transparent visible={perfilAberto} animationType="fade">
        <View style={styles.modalFundo}>
          <View style={styles.perfilConteudo}>
            <Pressable style={styles.fechar} onPress={() => setPerfilAberto(false)}>
              <EvilIcons name="close" size={24} color="#fff" />
            </Pressable>

            <Text style={styles.loginTitulo}>Login</Text>

            <Text style={styles.label}>Email</Text>
            <TextInput 
              placeholder="exemplo@email.com" 
              placeholderTextColor="#ccc" 
              style={styles.input} 
            />

            <Text style={styles.label}>Senha</Text>
            <TextInput 
              placeholder="Digite sua senha" 
              secureTextEntry 
              placeholderTextColor="#ccc" 
              style={styles.input} 
            />

            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

function MenuItem({ icon, text, onPress }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <Ionicons name={icon} size={22} color="#fff" />
      <Text style={styles.menuText}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
  },
  topBar: {
    height: 60,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    elevation: 5,
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sidebar: {
    position: 'absolute',
    top: 60, 
    left: 0,
    width: 200,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: 20,
    paddingVertical: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  menuText: {
    color: '#fff',
    marginLeft: 12,
    fontSize: 16,
  },
  modalFundo: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  perfilConteudo: {
    width: '85%',
    backgroundColor: 'rgba(22, 41, 56, 0.95)',
    borderRadius: 10,
    padding: 20,
  },
  fechar: {
    alignSelf: 'flex-end',
  },
  loginTitulo: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#fff',
  },
  label: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    color: '#fff',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    paddingVertical: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#fff',
  },
  botao: {
    backgroundColor: '#6b9e82',
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
