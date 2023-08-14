import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-date-picker';

interface SignupProps {
  navigation: any;
}

const Signup: React.FC<SignupProps> = ({navigation}) => {
  const [birthDate, setbirthDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleDateChange = (selectedDate: React.SetStateAction<Date>) => {
    if (selectedDate) {
      setbirthDate(selectedDate);
    }
    setOpen(false);
  };

  const handleSignup = async () => {
    try {
      // Create a payload object with the registration data
      const payload = {
        email,
        password,
        confirmPassword,
        birthDate,
      };

      // Send a POST request to the API endpoint
      const response = await fetch('http://192.168.43.137:3000/Akun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        // Data saved successfully
        console.log('Data pendaftaran berhasil disimpan.');

        // Save the registration data to AsyncStorage
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
        await AsyncStorage.setItem('confirmPassword', confirmPassword);
        await AsyncStorage.setItem('birthDate', birthDate.toISOString());

        // You can also navigate to another screen after saving the data
        navigation.navigate('login');
      } else {
        // Handle the error case
        console.log('Error saat menyimpan data pendaftaran:', response.status);
      }
    } catch (error) {
      console.log('Error saat menyimpan data pendaftaran:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Akun</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Konfirmasi Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.button1} onPress={() => setOpen(true)}>
        <Image
          source={require('../image/kalender.png')}
          resizeMode="contain"
          style={{width: 20, height: 20}}
        />
        <Text style={{position: 'absolute', left: 30}}>Set Tanggal Lahir</Text>
        <DatePicker
          mode="date"
          modal
          open={open}
          date={birthDate}
          onConfirm={handleDateChange}
          onCancel={() => setOpen(false)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Daftar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.navigate('login')}>
        <Text style={styles.linkText}>Sudah punya akun? Masuk disini.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#C68B59',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  button1: {right: 160},
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    marginTop: 10,
  },
  linkText: {
    color: '#C68B59',
  },
});

export default Signup;
