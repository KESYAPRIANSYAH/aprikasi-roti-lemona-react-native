import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Snackbar from 'react-native-snackbar';

const AccountScreen = ({navigation}: {navigation: any}) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch('http://192.168.43.137:3000/Akunyangsedanglogin')
      .then(response => response.json())
      .then(json => {
        setUsername(json.email);
        // Extract the username from the JSON object
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../image/profil.png')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{username}Kesyapriansyah@gmail.com</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() =>
            Alert.alert('Konfirmasi', 'Apakah Anda Yakin Ingin Logout', [
              {
                text: 'Batal',
                onPress: () => console.log('Batalkan'),
                style: 'cancel',
              },
              {
                text: 'OK',
                onPress: () => navigation.navigate('login'),
              },
            ])
          }>
          <Text style={styles.menuText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 50,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 25,
    color: 'black',
  },
  menu: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItem: {
    width: 150,
    backgroundColor: 'red',
    height: 40,
    borderRadius: 100,
  },
  menuText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default AccountScreen;
