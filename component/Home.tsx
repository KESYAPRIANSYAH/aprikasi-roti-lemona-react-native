import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Switch,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import Menu from './Menu';
import type {NativeEventSubscription} from 'react-native';
import {styles} from './stylesheeet/Stylehome';

const App = ({navigation}: {navigation: any}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);

    if (!isEnabled) {
      Alert.alert(
        'Notifikasi',
        'Apakah Anda ingin mengaktifkan notifikasi?',
        [
          {
            text: 'Batal',
            onPress: () => setIsEnabled(false),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => console.log('Notifikasi diaktifkan'),
          },
        ],
        {cancelable: false},
      );
    } else {
      Alert.alert(
        'Notifikasi',
        'Apakah Anda ingin menonaktifkan notifikasi?',
        [
          {
            text: 'Batal',
            onPress: () => setIsEnabled(true),
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => console.log('Notifikasi dinonaktifkan'),
          },
        ],
        {cancelable: false},
      );
    }
  };
  const handleBackButton = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah Anda yakin ingin keluar?',
      [
        {
          text: 'Tidak',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'Ya',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {cancelable: false},
    );
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
    };
  }, []);

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

          <View style={styles.Switch}>
            <Switch
              trackColor={{false: '#767577', true: '#835834'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
            <Text style={{fontSize: 8, color: '#835834'}}>Notifications</Text>
          </View>
        </View>

        <Text style={styles.text2}>Welcome To </Text>
        <Text style={styles.text21}>Lemona Roti </Text>
      </View>
      <View>
        <View style={styles.informasi}>
          <View style={{marginTop: 8}}>
            <View style={styles.pembungkusisiinformasi}>
              <TouchableOpacity style={styles.isiinformasi}>
                <Image
                  source={require('../assets/outlet.png')}
                  resizeMode="contain"
                  style={styles.gambarinformasi}
                />
                <Text style={styles.textinformasi}>Outlet </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.isiinformasi}>
                <Image
                  source={require('../assets/koin.png')}
                  resizeMode="contain"
                  style={styles.gambarinformasi}
                />
                <Text style={styles.textinformasi}>Point Anda</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.isiinformasi}>
                <Image
                  source={require('../assets/scan.png')}
                  resizeMode="contain"
                  style={{
                    width: 60,
                    height: 60,
                    justifyContent: 'center',
                    marginLeft: 20,
                    marginTop: 18,
                  }}
                />
                <Text style={styles.textinformasi}>Scan Kode</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.pembungkusisiinformasi}>
              <TouchableOpacity style={styles.isiinformasi}>
                <Image
                  source={require('../assets/member.png')}
                  resizeMode="contain"
                  style={styles.gambarinformasi}
                />
                <Text style={styles.textinformasi}>Join Member</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.isiinformasi}
                onPress={() => navigation.navigate('Keranjang')}>
                <Image
                  source={require('../assets/keranjang.png')}
                  resizeMode="contain"
                  style={{
                    width: 70,
                    height: 70,
                    justifyContent: 'center',
                    marginLeft: 15,
                    marginTop: 7,
                  }}
                />
                <Text style={styles.textinformasi}>Keranjang</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.isiinformasi}>
                <Image
                  source={require('../assets/cs.jpg')}
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                    flex: 1,
                    justifyContent: 'center',
                    marginLeft: 30,
                  }}
                />
                <Text style={styles.textinformasi}>CS</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.header}>
        <View style={styles.head1}>
          <Text style={styles.text3}>best Seller</Text>
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
        </View>
        {/* Best seller  */}
        <View style={styles.container}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataSlide}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handlePress(item.destination)}>
                <Image source={item.image} style={styles.box} />
                <View style={styles.konten}>
                  <Text style={styles.isikonten}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Best seller  */}

        {/* Daftar Menu  */}

        <View style={styles.container}>
          <Text style={styles.text4}>Daftar Menu</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataSlide}
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

        {/* informasi */}

        <Menu />
        {/* informasi */}
      </View>
    </ScrollView>
  );
};

export default App;
