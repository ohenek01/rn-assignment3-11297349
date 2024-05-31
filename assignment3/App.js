import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello, Guys</Text>
      <Text style={styles.headerParagraph}>14 Tasks today</Text>
      <Image source={require('./assets/Profile Image.png')} style={styles.profile}/>
      <View style={styles.searchArea}>
      <TextInput style={styles.searchBar} placeholder='Search'/>
      <Icon name='search' style={styles.icon}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'antiquewhite',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
    position: 'absolute',
    top: 50,
    left: 23,
  },
  headerParagraph:{
    position:'absolute',
    top: 80,
    left: 22,
  }, 
    profile: {
    position: 'absolute',
    top: 55,
    right: 30,
    width: 30
  },

  searchArea: {
    position: 'absolute',
    top: 130,
    left: 30,
    backgroundColor: 'white',
    width: 250,
    height: 40,
    borderRadius: 10
  },

  searchBar:{
    flex: 1,
    paddingLeft: 36,
    fontSize: 16,
  }, 
  icon:{
    fontSize: 18,
    position: 'absolute',
    top: 10,
  },
});
