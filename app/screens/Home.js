import { Container } from 'native-base';
import React from 'react';
import { View, Text, FlatList, StatusBar } from 'react-native';
import countries from '../api/countries.json';
import ListCard from '../components/ListCard';
import _Text from '../components/Text';
import _normzer from '../utils/normalizer';

export default function Home() {
  const renderItem = ({ item }) => <ListCard {...item} />;
  return (
    <Container>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: _normzer(10),
          borderBottomColor: '#999',
          borderBottomWidth: 1,
        }}
      >
        <_Text
          textType={'bold'}
          textStyle={{ fontSize: _normzer(27), lineDecoration: 'underline' }}
        >
          World Country Directory
        </_Text>
      </View>
      <StatusBar backgroundColor={'#fff'} barStyle={'dark-content'} />
      <FlatList data={countries} renderItem={renderItem} />
    </Container>
  );
}
