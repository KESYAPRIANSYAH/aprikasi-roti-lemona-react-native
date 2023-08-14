import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Snackbar from 'react-native-snackbar';

const LoginScreen = ({navigation}: {navigation: any}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Mengambil data email dan password dari AsyncStorage
      const storedEmail = await AsyncStorage.getItem('email');
      const storedPassword = await AsyncStorage.getItem('password');

      // Melakukan validasi login berdasarkan data dari AsyncStorage
      if (email === storedEmail && password === storedPassword) {
        // Menggunakan API untuk validasi login
        const response = await fetch(
          'http://192.168.43.137:3000/Akunyangsedanglogin',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          },
        );

        if (response.ok) {
          navigation.navigate('Nav');
          Snackbar.show({
            text: 'Login berhasil!',
            textColor: 'black',
            duration: Snackbar.LENGTH_INDEFINITE,
            backgroundColor: '#C68B59',
            action: {
              text: 'ok',
              textColor: 'black',
            },
          });
        } else {
          Alert.alert('Email atau password salah.');
        }
      } else {
        Alert.alert('Email atau password salah.');
      }
    } catch (error) {
      console.log('Error saat mengambil data login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../image/lemona.png')}
        resizeMode="contain"
        style={{width: 237, height: 95, marginBottom: 50}}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate('Daftar')}>
        <Text style={styles.signupText}>Belum punya akun? Daftar di sini</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    color: '#C68B59',
    borderColor: '#C68B59',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#C68B59',
    width: 250,
    height: 50,
    padding: 10,
    borderRadius: 50,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signup: {
    marginTop: 10,
  },
  signupText: {
    color: '#C68B59',
    fontSize: 14,
  },
});

export default LoginScreen;
