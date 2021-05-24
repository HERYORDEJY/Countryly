import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import _Text from './Text';
import SvgUri from 'react-native-svg-uri';
import { Icon } from 'native-base';
import _normzer from '../utils/normalizer';
import { FileSystem } from 'react-native-unimodules';
import { useNavigation } from '@react-navigation/native';

export default function ListCard({
  name,
  subregion,
  region,
  flag,
  alpha3Code,
}) {
  const [state, setState] = useState({ flag: '' });
  const navigation = useNavigation();
  // console.log(state);
  let getFlag;
  const alpha3Code_ = String(alpha3Code).toLowerCase();
  // const localUri = require(`../assets/images/`);
  async function _getFlag() {
    const { uri: localUri } = await FileSystem.downloadAsync(
      `${flag}`,
      FileSystem.documentDirectory + `${alpha3Code}.png`,
    );
    setState({ ...state, flag: `${localUri}` });
  }
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Details', { name: name })}
    >
      <View style={styles.left}>
        {/* <SvgUri
          width="50"
          height="50"
          source={{
            uri: 'https://restcountries.eu/data/zaf.svg',
          }}
          // source={require('../assets/images/prk.svg')}
        /> */}
      </View>
      <View style={styles.body}>
        <_Text
          textStyle={{ color: '#000', fontSize: _normzer(25) }}
          textType={'bold'}
        >
          {name ?? 'Nigeria'}
        </_Text>
        <_Text textStyle={{ color: '#000', fontSize: _normzer(19) }}>
          {subregion ? `${subregion},` : null} {region}
        </_Text>
      </View>
      <View>
        <Icon name={'chevron-right'} type={'Feather'} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: _normzer(20),
    paddingVertical: _normzer(10),
    marginVertical: _normzer(10),
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
  left: { flex: 0.2, borderRightWidth: 1, borderRightColor: '#ddd' },
  body: { flex: 1, paddingHorizontal: _normzer(10) },
  right: { flex: 0.2, borderLeftWidth: 3, borderLeftColor: '#ddd' },
});
