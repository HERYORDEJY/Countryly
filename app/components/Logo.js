import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import normzer from '../utils/normalizer';

const _Logo = () => {
  return (
    // <View style={styles.container}>
    <Image
      style={{ width: null, flex: 1, overflow: 'hidden' }}
      resizeMode={'contain'}
      source={require('../assets/images/mtAHIRlogo.png')}
    />
    // </View>
  );
};

export default _Logo;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
