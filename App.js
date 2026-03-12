import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.row}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        <View style={styles.box4}></View>
      </View>
      <Text style={styles.title}>Balok Warna</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20
  },


  container: {
    height: 250,
    backgroundColor: '#f186e5',
    justifyContent: 'flex-start',
    paddingTop: 50
  },

  row: {
    flexDirection: 'row'
  },

   box1: {
    width: 100,
    height: 40,
    backgroundColor: 'red'
  },

  box2: {
    width: 100,
    height: 70,
    backgroundColor: 'blue'
  },

  box3: {
    width: 100,
    height: 110,
    backgroundColor: 'green'
  },

  box4: {
    width: 100,
    height: 150,
    backgroundColor: 'orange'
  }

});