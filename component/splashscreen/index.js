import React, {useEffect} from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('login');
    }, 3000);
  }, []);
  return (
    <ImageBackground
      source={require('./image/splashbackgrounds.png')}
      style={styles.background}></ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Splash;
