import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import api from './src/services/api';

export default function App() {
  const [pizza, setPizza] = useState();
  
  useEffect(()=>{
    const response = await api.get('/pizza/todas')
    const { pizzas } = response.data;
    setPizza(pizzas)
  })

  return (
    <View style={styles.container}>
      <View>
        <Text>Pizzas</Text>   
      </View>
      <View></View>
      <View>
        <Text>Bebidas</Text>   
      </View>
      <View></View>
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
});
