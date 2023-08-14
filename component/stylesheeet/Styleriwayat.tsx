import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
    right: 40,
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
    fontSize: 14,
    position: 'absolute',
    right: 50,
    marginTop: 45,
    color: 'black',
  },
});

export {styles};
