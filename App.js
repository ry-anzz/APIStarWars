
import React,{useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, ImageBackground } from 'react-native';
import backgroundImg from './assets/fundo.jpg';

const request = async(callback) =>{
  const response = await fetch('https://swapi.dev/api/starships/?page=2');
  const parsed = await response.json();
  callback(parsed.results);
};

export default function App() {
  

  const [registros, setRegistros]= useState([]);

  useEffect(()=>{
    request(setRegistros);
  },[]);
  
  return(
   

    
       <ImageBackground source={backgroundImg} style={styles.fundo}>
        <Text style={styles.titulo}>API Star Wars</Text>
        <FlatList
          data={registros}
          keyExtractor={(item)=>item.name.toString()}
          renderItem={({item})=>
          <Text style= {styles.api}>
          <Text>Nome: {item.name} {'\n'} {'\n'}</Text>
          <Text>Modelo: {item.model}</Text>
          </Text>
        }
        />
     </ImageBackground>

    
  );

}




const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  

api:{
  backgroundColor:'grey',
  color: '#00FFFF',
  padding: 40,
  borderRadius: 30,
  marginTop: 40,
  
},

titulo:{
  display: 'flex',
  textAlign: 'center',
  justifyContent: 'center',
  marginTop: 30,
  fontSize: 40,
  color:'white',
},

});
