import React, {useState, useEffect} from 'react';
import {Picker} from '@react-native-picker/picker';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ImageBackground,
} from 'react-native';
// import Carousel from './element/Carousel';

// import {ScrollView} from 'react-native-gesture-handler';

const App = ({navigation}: {navigation: any}) => {
  const name = 'Oreo';
  const price = 28000;
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    setRefreshing(true);
    fetch('http://192.168.43.137:3000/products')
      .then(response => response.json())
      .then(json => {
        setData(json);
        console.log(json);
        setRefreshing(false);
      })
      .catch(error => {
        console.error(error);
        setRefreshing(false);
      });
  }

  function postData() {
    fetch('http://192.168.43.137:3000/products', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        price: price,
        // quantity: selectedQuantity,
      }),
    })
      .then(() => {
        getData();
        Alert.alert(
          'Konfirmasi',
          'Apakah Anda yakin ingin Menambahkan Ke keranjang ?',
          [
            {
              text: 'Tidak',
              onPress: () => {},
              style: 'cancel',
            },
            {
              text: 'Ya',

              onPress: () =>
                Alert.alert(
                  'Pesanan Anda Berhasil Ditambahkan ',
                  'Apakah Anda Ingin Menuju Halaman Keranjang?',
                  [
                    {
                      text: 'Tidak',
                      onPress: () => {},
                      style: 'cancel',
                    },
                    {
                      text: 'Ya',
                      onPress: () => navigation.navigate('Keranjang'),
                    },
                  ],
                  {cancelable: false},
                ),
            },
          ],
          {cancelable: false},
        );
      })
      .catch(error => console.error(error));
  }

  function deleteData(id: any) {
    fetch(`http://192.168.43.137:3000/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => getData())
      .catch(error => console.error(error));
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bacgroundoreo.png')}
        style={{
          width: '100%',
          height: 400,
          marginTop: 200,
          borderRadius: 25,
        }}></ImageBackground>
      <Image
        source={require('../assets/halal.png')}
        resizeMode="contain"
        style={{
          width: 50,
          height: 50,
          position: 'absolute',
          right: 40,
          bottom: 280,
        }}
      />
      <View style={styles.layar}>
        <Text style={styles.title}>Lemona Roti</Text>

        <View style={styles.bestseller}>
          <Image
            source={require('../assets/bintang.png')}
            resizeMode="contain"
            style={styles.best}
          />
          <Image
            source={require('../assets/bintang.png')}
            resizeMode="contain"
            style={styles.best}
          />
          <Image
            source={require('../assets/bintang.png')}
            resizeMode="contain"
            style={styles.best}
          />
          <Image
            source={require('../assets/bintang.png')}
            resizeMode="contain"
            style={styles.best}
          />
        </View>
        <View style={styles.title}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'black'}}>
            Varian Oreo
          </Text>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Rp.28000
          </Text>
        </View>
        <View style={{left: 15, marginTop: 20}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'black'}}>
            Varian Rasa Lainya
          </Text>

          {/* VARIAN  */}
          <View style={{flexDirection: 'row', marginTop: 20, right: 5}}>
            <TouchableOpacity
              style={{width: 100, height: 100}}
              onPress={() => navigation.navigate('Pembayaran')}>
              <Image
                source={require('../assets/Choco.png')}
                resizeMode="contain"
                style={{width: 70, height: 70}}
              />
              <Text style={{color: 'black'}}>Coklat</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: 100, height: 100}}
              onPress={() => navigation.navigate('srikaya')}>
              <Image
                source={require('../assets/Sarikaya.png')}
                resizeMode="contain"
                style={{width: 70, height: 70}}
              />
              <Text style={{color: 'black'}}>Srikaya</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: 100, height: 100}}
              onPress={() => navigation.navigate('Pembayaranbanana')}>
              <Image
                source={require('../assets/Banana.png')}
                resizeMode="contain"
                style={{width: 70, height: 70}}
              />
              <Text style={{color: 'black'}}>Banana</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{width: 100, height: 100}}
              onPress={() => navigation.navigate('Pembayaranredvelvet')}>
              <Image
                source={require('../assets/red.png')}
                resizeMode="contain"
                style={{width: 70, height: 70}}
              />
              <Text style={{color: 'black'}}>Red Velvet</Text>
            </TouchableOpacity>
          </View>

          {/* VARIAN  */}
        </View>
      </View>

      <TouchableOpacity onPress={postData} style={styles.addButton}>
        <Image
          source={require('../assets/keranjang2.png')}
          resizeMode="contain"
          style={{width: 30, height: 50, position: 'absolute', left: 35}}
        />
        <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
          Tambahkan Ke Keranjang
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
  text: {
    marginBottom: 10,
  },
  nav: {
    width: '100%',
    height: '10%',
    marginBottom: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
    left: 15,
    color: 'black',
  },
  layar: {
    marginTop: 20,
    width: '100%',
    height: '90%',
    marginBottom: 0,
  },
  render: {
    backgroundColor: 'blue',
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    borderRadius: 10,
  },
  inputContainer: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#C68B59',
    width: '80%',
    height: 60,
    position: 'absolute',
    bottom: 20,
    borderRadius: 25,
  },
  deleteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  picker: {
    width: '100%',
    marginBottom: 16,
  },
  best: {
    width: 30,
    height: 30,
  },
  bestseller: {
    flexDirection: 'row',
    position: 'absolute',
    left: 160,
  },
});

export default App;
