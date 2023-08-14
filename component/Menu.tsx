import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

export default function Menu() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableOpacity style={styles.menu}></TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 5},
  menu: {
    width: 300,
    height: 100,
    marginLeft: 50,
    margin: 5,
    backgroundColor: '#FFF3ED',
  },
  text4: {
    fontSize: 15,
    paddingTop: 30,
    fontWeight: 'bold',
    color: '#835834',
    textAlign: 'center',
  },
});
