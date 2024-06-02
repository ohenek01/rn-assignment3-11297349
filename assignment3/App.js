import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, FlatList, Pressable } from 'react-native';
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
        <Icon name='search' style={styles.searchIcon}/>
        <Pressable onPress={() => console.log('Pressed')}>
          <Icon name='filter' size={50} style={styles.filter}/>
        </Pressable>
      </View>

      <Text style={styles.category}>Categories</Text>
      
      <View style={styles.categoryContent}>
       <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.scroll}>
        <View style={styles.categoryContent1}>
          <Text style={styles.categoryText1}>Exercise</Text>
          <Text style={styles.categoryText2}>12 Tasks</Text>
          <Image source={require('./assets/young woman working online.png')}/>
        </View>

        <View style={styles.categoryContent1}>
          <Text style={styles.categoryText1}>Study</Text>
          <Text style={styles.categoryText2}>15 Tasks</Text>
          <Image source={require('./assets/young woman working at desk.png')}/>
        </View>
        
        <View style={styles.categoryContent1}>
        <Text style={styles.categoryText1}>Code</Text>
        <Text style={styles.categoryText2}>10 Tasks</Text>
          <Image source={require('./assets/female-developer-5359992-4492091 (1) (1).webp')}/>
        </View>

        <View style={styles.categoryContent1}>
        <Text style={styles.categoryText1}>Cook</Text>
        <Text style={styles.categoryText2}>5 Tasks</Text>
          <Image source={require('./assets/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA5L2thdGV2NjQ0N18zZF9pbGx1c3RyYXRpb25fb2ZfYW5fYXNpYW5fd29tYW5fY29va2luZ19mdWxsX2JvZHlfc184M2I4MzAwMy1hYmRlLTQ1YjUtYTk3MC01MmI0NmJiNmY5N2IucG5n (1).jpeg')}/>
        </View>

        <View style={styles.categoryContent1}>
        <Text style={styles.categoryText1}>Eat</Text>
        <Text style={styles.categoryText2}>7 Tasks</Text>
          <Image source={require('./assets/360_F_183118254_TaLvrkCE8ZeYhG9wTXFiBpnkEWfarIbA (1).jpg')}/>
        </View>

        <View style={styles.categoryContent1}>
        <Text style={styles.categoryText1}>Sports</Text>
        <Text style={styles.categoryText2}>10 Tasks</Text>
          <Image source={require('./assets/boy-football-soccer-cartoon-soccer-ball-soccer-player-child-football-player-soccer-kick-animation-png-clipart-thumbnail (1).jpg')}/>
        </View>

        <View style={styles.categoryContent1}>
        <Text style={styles.categoryText1}>Pray</Text>
        <Text style={styles.categoryText2}>2 Tasks</Text>
          <Image source={require('./assets/little-african-american-boy-character-kneeling-prayer-cartoon-vector-illustration-little-african-american-boy-character-151471233 (1).webp')}/>
        </View>

        <View style={styles.categoryContent1}>
        <Text style={styles.categoryText1}>Dance</Text>
        <Text style={styles.categoryText2}>6 Tasks</Text>
          <Image source={require('./assets/man-dancing-street-dance-urban-600nw-2187453521 (1).webp')}/>
        </View>
       </ScrollView>  
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
    top: 50,
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
  searchIcon:{
    fontSize: 18,
    position: 'absolute',
    top: 10,
  },
  filter:{
    position: 'absolute',
    color: 'red',
    left: 320,
    top: -40,
  },

  category:{
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    top: 220,
    left: 35,
  },
  categoryContent:{
    maxHeight: 200,
    marginTop: -40
  },
  categoryContent1:{
    backgroundColor: 'white',
    borderRadius: 20,
    width: 180,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginLeft: 15,
  },
  
  categoryText1:{
    fontWeight: 'bold',
    fontSize: 15,
    position: 'absolute',
    top: 10,
    left: 15,
  },
  categoryText2:{
    fontSize: 12,
    top: -18,
    left: -51,
  },
  
});
