import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_400Regular,
  Lato_400Regular,
} from '@expo-google-fonts/dev';

export default function App() {
  let [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
        return (
      <View style={styles.body}>
        <Text style={styles.titulo}>
          Os 4 grandes de São paulo
        </Text>
        <FlatList
          data={arrayTimes}
          renderItem={({ item }) =>(
            <View style={styles.container}>
              <Text>
                <View style={styles.nomeDoTime}><Text> {item.nome}</Text></View>
                {'\n'}
             <View style={styles.img}><Image style={styles.img} source={item.capa} /></View>
                {'\n'}
                <Text style={styles.info}>Ano: </Text> <View style={styles.info2}>{item.ano_de_fundacao} </View>
                {'\n'}
              </Text>

            </View>
          )}
        />
      </View>
    );
}}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    marginBottom: 100,
  },
body:{
  backgroundColor: 'grey',
},
  titulo: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#ffff',
    fontFamily: 'Lato_400Regular',
    marginTop: 50,
    marginBottom:100,
    textAlign:'center',
  },

  img: {
    width: 250,
    height: 250,
    resizeMode: 'center',
    marginTop: 15,
    marginBottom: 50,
    textAlign: 'center',
  },

  info: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'white',
    marginTop: 50,
    fontFamily: 'Nunito_400Regular',
  },

  nomeDoTime:{
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
},
info2:{
fontSize: 20,
}
});

const arrayTimes = [
  {
    nome: 'Palmeiras',
    ano_de_fundacao: '1914',
    capa: require('./assets/escudo-palmeiras.png'),
  },
  {
    nome: 'Corinthians',
    ano_de_fundacao: '1910',
    capa: require('./assets/escudo-corinthians.png'),
  },
  {
    nome: 'Santos',
    ano_de_fundacao: '1930',
    capa: require('./assets/escudo-santos.png'),
  },
  {
    nome: 'São Paulo',
    ano_de_fundacao: '1930',
    capa: require('./assets/escudo-sao-paulo.png'),
  }]