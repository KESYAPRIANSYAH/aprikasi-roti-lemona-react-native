// export default CartPage;
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  const fetchData = async () => {
    try {
      const response = await fetch('http://192.168.43.137:3000/products');
      const data = await response.json();
      setCartItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteItem = async (itemId: any) => {
    try {
      Alert.alert('Konfirmasi', 'Apakah Anda yakin ingin menghapus item ini?', [
        {
          text: 'Batal',
          style: 'cancel',
        },
        {
          text: 'Hapus',
          onPress: async () => {
            await fetch(`http://192.168.43.137:3000/products/${itemId}`, {
              method: 'DELETE',
            });
            setCartItems(prevItems =>
              prevItems.filter(item => item.id !== itemId),
            );
          },
        },
      ]);
    } catch (error) {
      console.error(error);
    }
  };

  const calculateTotalPrice = () => {
    let total = 0;
    for (const item of cartItems) {
      total += item.price;
    }
    setTotalPrice(total);
  };

  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  });

  return (
    <>
      <View style={styles.container}>
        {cartItems.length === 0 ? (
          <Text>Keranjang kosong.</Text>
        ) : (
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={cartItems}
            renderItem={({item}) => (
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    margin: 10,
                  }}>
                  <View style={styles.box1}>
                    <Text style={styles.TextLemona}>Lemona</Text>
                    <Text style={styles.Texttgl}>12 Dec 2022</Text>
                    <Image
                      source={require('../assets/red.png')}
                      resizeMode="contain"
                      style={styles.gmbrpesanan}
                    />
                    <Text style={styles.TextTotalPesanan}>
                      Total Pesanan Produk
                    </Text>
                    <Text style={styles.harga}>
                      {formatter.format(item.price)}
                    </Text>
                    <Text style={styles.jenisPesanan}>{item.name}</Text>
                    <TouchableOpacity
                      onPress={() => handleDeleteItem(item.id)}
                      style={styles.deleteButton}>
                      <Text style={styles.deleteButtonText}>Hapus</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
            )}
          />
        )}
      </View>
      {cartItems.length !== 0 && (
        <View>
          <Text style={{left: 40, fontWeight: 'bold'}}>
            Total Belanja: {formatter.format(totalPrice)}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#C68B59',
              width: 80,
              height: 40,
              borderRadius: 4,
              left: 40,
              marginTop: 20,
            }}>
            <Text
              style={{
                textAlign: 'center',
                alignItems: 'center',
                fontWeight: 'bold',
                color: '#FFFFFF',
                marginTop: 10,
              }}>
              Checkout
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 520,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: 'red',
    padding: 8,
    borderRadius: 4,
    position: 'absolute',
    right: 10,
    bottom: 70,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  header: {
    width: '100%',
    backgroundColor: '#59331F',
    height: 79,
  },
  tmblback: {position: 'absolute', left: 20},
  textRiwayatpesanan: {
    color: '#ffffffff',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 55,
    fontWeight: 'bold',
  },
  tmblkeranjang: {position: 'absolute', right: 40},
  box1: {
    width: 332,
    height: 111,
    backgroundColor: '#D9D9D9',
    marginLeft: 25,
    marginRight: 25,
    elevation: 1,
  },
  TextLemona: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
    color: 'black',
  },
  Texttgl: {
    fontSize: 12,
    position: 'absolute',
    right: 80,
    marginTop: 10,
    color: 'black',
  },
  gmbrpesanan: {width: 49, height: 46, marginLeft: 10, marginTop: 5},
  TextTotalPesanan: {
    fontSize: 12,
    marginLeft: 10,
    marginTop: 5,
    color: 'black',
  },
  harga: {
    fontSize: 12,
    position: 'absolute',
    right: 40,
    marginTop: 80,
    color: 'black',
  },
  jenisPesanan: {
    fontSize: 15,
    position: 'absolute',
    right: 80,
    marginTop: 45,
    color: 'black',
  },
});

export default CartPage;
