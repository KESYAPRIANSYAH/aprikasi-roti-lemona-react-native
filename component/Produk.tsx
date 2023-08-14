import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';

import {styles} from './stylesheeet/Styleproduk';
import Menu from './Menu';

const Home = ({navigation}: {navigation: any}) => {
  const handlePress = (destination: string) => {
    if (destination === 'Pembayaran') {
      navigation.navigate('Pembayaran');
    } else if (destination === 'Pembayaranoreo') {
      navigation.navigate('Pembayaranoreo');
    } else if (destination === 'Pembayaranbanana') {
      navigation.navigate('Pembayaranbanana');
    } else if (destination === 'Pembayaransrikaya') {
      navigation.navigate('srikaya');
    } else if (destination === 'Pembayaranredvelvet') {
      navigation.navigate('Pembayaranredvelvet');
    } else {
      console.log('Tujuan tidak ditemukan');
    }
  };
  const [dataSlide, setDataSlide] = useState([
    {
      text: 'Coklat',
      image: require('../assets/Choco.png'),
      rp: 'Rp 28.000',
    },
    {
      text: 'Oreo',
      image: require('../assets/Oreo.png'),
      rp: 'Rp 29.000',
    },
    {
      text: 'Banana Milk',
      image: require('../assets/Banana.png'),
      rp: 'Rp 25.000',
    },
    {
      text: 'Srikaya',
      image: require('../assets/Sarikaya.png'),
      rp: 'Rp 29.000',
    },
    {
      text: 'Red Velvet',
      image: require('../assets/red.png'),
      rp: 'Rp 28.000',
    },
  ]);
  const [databest, setDataBest] = useState([
    {
      text: 'Coklat',
      image: require('../assets/Choco.png'),
      rp: 'Rp 28.000',
      destination: 'Pembayaran',
    },
    {
      text: 'Oreo',
      image: require('../assets/Oreo.png'),
      rp: 'Rp 29.000',
      destination: 'Pembayaranoreo',
    },
    {
      text: 'Banana Milk',
      image: require('../assets/Banana.png'),
      rp: 'Rp 25.000',
      destination: 'Pembayaranbanana',
    },
    {
      text: 'Srikaya',
      image: require('../assets/Sarikaya.png'),
      rp: 'Rp 29.000',

      destination: 'Pembayaransrikaya',
    },
    {
      text: 'Red Velvet',
      image: require('../assets/red.png'),
      rp: 'Rp 28.000',
      destination: 'Pembayaranredvelvet',
    },
  ]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#C68B59"
        translucent={true}
      />
      <View style={styles.head1}>
        <View>
          <Text style={styles.text1}>Hello,Samidi</Text>
          <TouchableOpacity
            style={styles.profil}
            onPress={() => navigation.navigate('Profil')}>
            <Image
              source={require('../assets/profil.png')}
              resizeMode="contain"
              style={styles.profil1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notif}>
            <Image
              source={require('../assets/notif.png')}
              resizeMode="contain"
              style={styles.profil1}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.text2}>Silahkan Pilih </Text>
        <Text style={styles.text21}>Menu Favorit Mu</Text>
      </View>

      <View style={styles.header}>
        <View style={styles.head1}></View>
        {/* Varian  */}
        <View style={styles.pembungkusvarian}>
          <View style={styles.varian}>
            <Image
              source={require('../assets/ori.png')}
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                marginLeft: 25,
                marginTop: 10,
              }}
            />
            <Text style={styles.textvarian}>Original</Text>
          </View>
          <View
            style={styles.varian}
            // onPress={() => navigation.navigate('Panggang')}
          >
            <Image
              source={require('../assets/panggang.png')}
              resizeMode="contain"
              style={{
                width: 100,
                height: 100,
                marginLeft: 25,
                marginTop: 10,
              }}
            />
            <Text style={styles.textvarian}>Panggang</Text>
          </View>
        </View>

        {/* Varian */}

        {/* Daftar Menu  */}

        <View style={styles.container}>
          <Text style={styles.text4}>Daftar Menu Original</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={databest}
            renderItem={({item}) => (
              <TouchableOpacity>
                <TouchableOpacity
                  style={styles.menu}
                  onPress={() => handlePress(item.destination)}>
                  <Image source={item.image} style={styles.box2} />
                  <Text style={styles.textmenu}>{item.text}</Text>
                  <Text style={styles.textrp}>{item.rp}</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.text4}>Daftar Menu Panggang</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={databest}
            renderItem={({item}) => (
              <TouchableOpacity>
                <TouchableOpacity
                  style={styles.menu}
                  onPress={() => handlePress(item.destination)}>
                  <Image source={item.image} style={styles.box2} />
                  <Text style={styles.textmenu}>{item.text}</Text>
                  <Text style={styles.textrp}>{item.rp}</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Daftar Menu  */}
        <Menu />
        {/* informasi */}

        {/* informasi */}
      </View>
    </ScrollView>
  );
};

export default Home;
