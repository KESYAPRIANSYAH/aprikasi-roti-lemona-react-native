import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface SnackbarProps {
  message: string;
}

const Snackbar: React.FC<SnackbarProps> = props => {
  const [visible, setVisible] = useState(true);

  const hideSnackbar = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <View style={styles.container}>
          <Text style={styles.message}>{props.message}</Text>
          <Text style={styles.action} onPress={hideSnackbar}>
            OK
          </Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#323232',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  message: {
    color: '#FFFFFF',
    flex: 1,
  },
  action: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Snackbar;
