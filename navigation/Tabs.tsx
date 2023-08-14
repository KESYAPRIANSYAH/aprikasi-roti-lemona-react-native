import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../component/Home';
import Riwayat from '../component/Riwayat';
import Produk from '../component/Produk';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Splash from '../component/splashscreen';
import Pembayaran from '../pembayaran/Pembayaran';
import Pembayaransrikaya from '../pembayaran/Pembayaransrikaya';
import Pembayaranbanana from '../pembayaran/Pembayaranbanana';
import Pembayaranredvelvet from '../pembayaran/Pembayaranredvlevet';
import Pembayaranoreo from '../pembayaran/Pembayaranoreo';
import Keranjang from '../component/Keranjang';
import {useNavigation} from '@react-navigation/native';

import Akun from '../component/user/Akun';
import AccountScreen from '../component/user/Profil';
import DaftarAkun from '../component/user/Daftar';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Nav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          backgroundColor: '#C68B59',
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assets/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#000000',
                }}
              />
              <Text
                style={{color: focused ? '#FFFFFF' : '#000000', fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Produk"
        component={Produk}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assets/kue.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#000000',
                }}
              />
              <Text
                style={{color: focused ? '#FFFFFF' : '#000000', fontSize: 12}}>
                Produk
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Riwayat"
        component={Riwayat}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
              <Image
                source={require('../assets/info.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#000000',
                }}
              />
              <Text
                style={{color: focused ? '#FFFFFF' : '#000000', fontSize: 12}}>
                Riwayat
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Routing = ({navigation}: {navigation: any}) => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Nav" component={Nav} options={{headerShown: false}} />
      <Stack.Screen
        name="Home"
        options={{headerShown: false}}
        component={Home}
      />
      <Stack.Screen
        name="Profil"
        options={{headerShown: true}}
        component={AccountScreen}
      />
      <Stack.Screen
        name="login"
        options={{headerShown: false}}
        component={Akun}
      />
      <Stack.Screen
        name="Daftar"
        options={{headerShown: true}}
        component={DaftarAkun}
      />
      <Stack.Screen
        name="Keranjang"
        options={{
          headerStyle: {
            backgroundColor: '#59331F',
            // Atur warna latar belakang header
          },
          headerRight: () => {
            const navigation = useNavigation();

            return (
              <TouchableOpacity>
                <Image
                  source={require('../assets/keranjang2.png')}
                  resizeMode="contain"
                  style={{width: 30, height: 27}}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: {
            position: 'absolute',
            right: 20,
            top: 20, // Mengeser gambar ke kanan sejauh 10 piksel
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            // Atur gaya teks judul header
          },
          headerTintColor: 'white', // Atur warna teks dan ikon header
        }}
        component={Keranjang}
      />
      <Stack.Screen
        name="Pembayaran"
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // Atur warna latar belakang header
          },

          headerRight: () => {
            const navigation = useNavigation();

            const handlePress = () => {
              navigation.navigate('Keranjang'); // Replace 'OtherScreen' with the name of the destination screen
            };

            return (
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={require('../assets/keranjang2.png')}
                  resizeMode="contain"
                  style={{width: 30, height: 27}}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: {
            position: 'absolute',
            right: 20,
            top: 20, // Mengeser gambar ke kanan sejauh 10 piksel
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'transparent', // Atur gaya teks judul header
          },
          headerTintColor: 'white', // Atur warna teks dan ikon header
        }}
        component={Pembayaran}
      />
      <Stack.Screen
        name="Pembayaranbanana"
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // Atur warna latar belakang header
          },

          headerRight: () => {
            const navigation = useNavigation();

            const handlePress = () => {
              navigation.navigate('Keranjang'); // Replace 'OtherScreen' with the name of the destination screen
            };

            return (
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={require('../assets/keranjang2.png')}
                  resizeMode="contain"
                  style={{width: 30, height: 27}}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: {
            position: 'absolute',
            right: 20,
            top: 20, // Mengeser gambar ke kanan sejauh 10 piksel
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'transparent', // Atur gaya teks judul header
          },
          headerTintColor: 'white', // Atur warna teks dan ikon header
        }}
        component={Pembayaranbanana}
      />
      <Stack.Screen
        name="Pembayaranoreo"
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // Atur warna latar belakang header
          },

          headerRight: () => {
            const navigation = useNavigation();

            const handlePress = () => {
              navigation.navigate('Keranjang'); // Replace 'OtherScreen' with the name of the destination screen
            };

            return (
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={require('../assets/keranjang2.png')}
                  resizeMode="contain"
                  style={{width: 30, height: 27}}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: {
            position: 'absolute',
            right: 20,
            top: 20, // Mengeser gambar ke kanan sejauh 10 piksel
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'transparent', // Atur gaya teks judul header
          },
          headerTintColor: 'white', // Atur warna teks dan ikon header
        }}
        component={Pembayaranoreo}
      />
      <Stack.Screen
        name="Pembayaranredvelvet"
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // Atur warna latar belakang header
          },

          headerRight: () => {
            const navigation = useNavigation();

            const handlePress = () => {
              navigation.navigate('Keranjang'); // Replace 'OtherScreen' with the name of the destination screen
            };

            return (
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={require('../assets/keranjang2.png')}
                  resizeMode="contain"
                  style={{width: 30, height: 27}}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: {
            position: 'absolute',
            right: 20,
            top: 20, // Mengeser gambar ke kanan sejauh 10 piksel
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'transparent', // Atur gaya teks judul header
          },
          headerTintColor: 'white', // Atur warna teks dan ikon header
        }}
        component={Pembayaranredvelvet}
      />
      <Stack.Screen
        name="srikaya"
        options={{
          headerStyle: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            // Atur warna latar belakang header
          },

          headerRight: () => {
            const navigation = useNavigation();

            const handlePress = () => {
              navigation.navigate('Keranjang'); // Replace 'OtherScreen' with the name of the destination screen
            };

            return (
              <TouchableOpacity onPress={handlePress}>
                <Image
                  source={require('../assets/keranjang2.png')}
                  resizeMode="contain"
                  style={{width: 30, height: 27}}
                />
              </TouchableOpacity>
            );
          },
          headerRightContainerStyle: {
            position: 'absolute',
            right: 20,
            top: 20, // Mengeser gambar ke kanan sejauh 10 piksel
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'transparent', // Atur gaya teks judul header
          },
          headerTintColor: 'white', // Atur warna teks dan ikon header
        }}
        component={Pembayaransrikaya}
      />
    </Stack.Navigator>
  );
};

export default Routing;
