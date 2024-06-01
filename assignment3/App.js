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
      <Text style={styles.category}>Categories</Text>
      <View style={styles.categoryContent}>
        <View style={styles.categoryContent1}>
          <Text style={styles.categoryText1}>Exercise</Text>
          <Text style={styles.categoryText2}>12 Tasks</Text>
          <Image source={require('./assets/young woman working online.png')}/>
        </View>
        <View style={styles.categoryContent2}>
          <Image source={require('./assets/young woman working at desk.png')}/>
        </View>
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
    width: 270,
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
  category:{
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 220,
    left: 35,
  },
  categoryContent:{
    display: 'flex',
    flexDirection: 'row',
    minHeight: 200
  },
  categoryContent1:{
    backgroundColor: 'white',
    borderRadius: 20,
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 15,
  },
  categoryContent2:{
    backgroundColor: 'white',
    borderRadius: 20,
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  categoryText1:{
    fontWeight: 'bold',
    fontSize: 15,
    paddingRight: 80,
    paddingBottom: 20
  },
  categoryText2:{
    fontSize: 12,
    paddingRight: 80,
    paddingBottom: 10
  }
});
