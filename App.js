import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [nome, setNome] = useState('Guilherme');
  const testes = () =>{
    alert('Teste');
  }

  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <TouchableOpacity onPress={() => setNome('Francisco')} style={styles.btn}>
          <Text style={{color: 'white', textAlign: 'center'}}>Clique aqui!</Text>
        </TouchableOpacity>
        <Text>{nome}</Text>
        <Image source={{ uri: "https://i.imgur.com/TkIrScD.png" }} style={{ width: 305, height: 159 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    width: 100,
    padding: 10,
    backgroundColor: 'green',
  }
});
