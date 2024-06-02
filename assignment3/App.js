import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, Button, FlatList, Pressable } from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
    <View style={{paddingBottom: 5}}>
      <Text style={styles.header}>Hello, Guys</Text>
      <Text style={styles.headerParagraph}>14 Tasks today</Text>
      <Image source={require('./assets/Profile Image.png')} style={styles.profile}/>

      <View style={styles.searchArea}>
        <TextInput style={styles.searchBar} placeholder='Search'/>
        <Icon name='search' style={styles.searchIcon}/>
        <Pressable onPress={() => console.log('Pressed')}>
          <Icon name='filter' size={40} style={styles.filter}/>
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
          <Image source={require('./assets/cHJpdmF0ZS9 (1).jpeg')}/>
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
        <Text style={{fontWeight: 'bold', fontSize: 28, marginTop: 40, marginLeft: 15}}>Ongoing Task</Text>
        <FlatList style={{marginTop: 10}}
          data={[
            {key: '1', text: 'Web Development'}, {key: '2', text: 'Mobile Development'},
            {key: '3', text: 'Data Science'}, {key: '4', text: 'Statistics'},
            {key: '5', text: 'Machine Learning'}, {key: '6', text: 'Calculus'},
            {key: '7', text: 'Algebra'}, {key: '8', text: 'Business Math'},
            {key: '9', text: 'English'}, {key: '10', text:'Deep Learning'},
            {key: '11', text: 'Python'}, {key: '12', text: 'Sit Ups'},
            {key: '13', text: 'Push Ups'}, {key: '14', text: 'Software Engineering'},
            {key: '15', text: 'Java'},
          ]}
          renderItem={({item}) => (
          <View style={styles.ongoingTasks}>
            <Text style={styles.taskList}>{item.text}</Text>
          </View>
        )}
        />
      </View>
    
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    width: 300,
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
    marginTop: 250,
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
  
  ongoingTasks:{
  backgroundColor: 'white',
  padding: 10,
  marginVertical: 5,
  borderRadius: 20,
  alignItems: 'center',
  justifyContent: 'center',
  elevation: 2,
  marginLeft: 15,
  marginRight: 15,
  },

  taskList:{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    width: 350,
    height: 100
  },
});

