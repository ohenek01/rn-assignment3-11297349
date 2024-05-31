import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> My name is <Text style={styles.boldText}>Ohene</Text></Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6756ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 24,
  },
  boldText:{
    fontWeight: 'bold',
  }
});
