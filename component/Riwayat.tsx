import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  FlatList,
  BackHandler,
  Alert,
} from 'react-native';
import {styles} from './stylesheeet/Styleriwayat';
const Riwayat = ({navigation}: {navigation: any}) => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#C68B59"
        translucent={true}
      />
      <View style={styles.header}>
        <View style={{marginTop: 40}}>
          <TouchableOpacity
            style={styles.tmblback}
            onPress={() => navigation.navigate('Home')}>
            <Image
              source={require('../assets/back.png')}
              resizeMode="contain"
              style={{width: 13, height: 19}}
            />
          </TouchableOpacity>

          <Text style={styles.textRiwayatpesanan}>Riwayat Pesanan</Text>
          <TouchableOpacity
            style={styles.tmblkeranjang}
            onPress={() => navigation.navigate('Keranjang')}>
            <Image
              source={require('../assets/keranjang2.png')}
              resizeMode="contain"
              style={{width: 27, height: 21}}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginTop: 20}}>
          <View style={styles.box1}>
            <Text style={styles.TextLemona}>Lemona</Text>
            <Text style={styles.Texttgl}>12 Dec 2022</Text>
            <Image
              source={require('../assets/red.png')}
              resizeMode="contain"
              style={styles.gmbrpesanan}
            />
            <Text style={styles.TextTotalPesanan}>Total Pesanan Produk</Text>
            <Text style={styles.harga}>RP 105.840</Text>
            <Text style={styles.jenisPesanan}>
              Tiramisu (2) + Coklat (2) + BBQ (2)
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.box1}>
            <Text style={styles.TextLemona}>Lemona</Text>
            <Text style={styles.Texttgl}>12 Dec 2022</Text>
            <Image
              source={require('../assets/red.png')}
              resizeMode="contain"
              style={styles.gmbrpesanan}
            />
            <Text style={styles.TextTotalPesanan}>Total Pesanan Produk</Text>
            <Text style={styles.harga}>RP 105.840</Text>
            <Text style={styles.jenisPesanan}>
              Tiramisu (2) + Coklat (2) + BBQ (2)
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <View style={styles.box1}>
            <Text style={styles.TextLemona}>Lemona</Text>
            <Text style={styles.Texttgl}>12 Dec 2022</Text>
            <Image
              source={require('../assets/red.png')}
              resizeMode="contain"
              style={styles.gmbrpesanan}
            />
            <Text style={styles.TextTotalPesanan}>Total Pesanan Produk</Text>
            <Text style={styles.harga}>RP 105.840</Text>
            <Text style={styles.jenisPesanan}>
              Tiramisu (2) + Coklat (2) + BBQ (2)
            </Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Riwayat;
