import React, { useEffect, useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import _Text from '../components/Text';
import { Icon, Container } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import _normzer from '../utils/normalizer';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import countries from '../api/countries.json';
import { alpha3code, flagCode } from '../api/alpha3code.js';

export default function Details(props) {
  const [state, setState] = useState({ flag: '' });
  const navigation = useNavigation();
  const { route } = props;
  const { params } = route;
  const { name } = params;
  const country = countries.filter((c) => c.name === name)[0];
  // const _3code = countries.map((c) =>  [c.alpha3Code]: c.name)[0];
  let _3code = [];
  let _3code_ = {};
  let alpha = country.alpha3Code;
  useEffect(() => {
    get3Code();
    console.log(state, flagCode[alpha], alpha);
  }, []);

  function get3Code(params) {
    setState({ ...state, flag: flagCode[alpha] });
    for (let i in countries) {
      const element = { [countries[i].alpha3Code]: countries[i].name };
      const elements = {
        [countries[i].alpha3Code]: `../assets/images/png/${countries[
          i
        ].alpha3Code.toLocaleLowerCase()}.png`,
      };
      _3code.push(element);
      _3code_ = { ..._3code_, ...elements };
    }
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        // style={{ padding: _normzer(10) }}
      >
        <Icon
          name="chevron-left"
          type="Feather"
          style={{ fontSize: _normzer(40) }}
        />
      </TouchableOpacity>
      <View style={{ alignItems: 'center', paddingHorizontal: _normzer(20) }}>
        <_Text
          textStyle={{ fontSize: _normzer(30), textAlign: 'center' }}
          textType="bold"
        >
          {country.name}
        </_Text>
      </View>
      <View
        style={{
          width: responsiveScreenWidth(100),
          heigth: _normzer(100),
          alignItems: 'center',
        }}
      >
        <Image
          source={require(`../assets/images/png/dza.png`)}
          style={{ width: responsiveScreenWidth(80), height: _normzer(200) }}
          resizeMode={'contain'}
        />
      </View>
      {/* Start List */}
      <View style={{ paddingHorizontal: _normzer(30), flex: 1 }}>
        <ScrollView
          horizontal={false}
          bounces={false}
          scrollEnabled={true}
          scrollEventThrottle={16}
          style={{}}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Capital : </_Text>
            <_Text textStyle={styles.value}>{country.capital}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Sub-Region : </_Text>
            <_Text textStyle={styles.value}>{country.subregion}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Region : </_Text>
            <_Text textStyle={styles.value}>{country.region}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Alt Spelling : </_Text>
            <_Text textStyle={styles.value}>
              {`${country.altSpellings[0]},\n${country.altSpellings[1]},\n${country.altSpellings[2]}`}
            </_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Alpha-2-Code : </_Text>
            <_Text textStyle={styles.value}>{country.alpha2Code}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Alpha-3-Code : </_Text>
            <_Text textStyle={styles.value}>{country.alpha3Code}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Population : </_Text>
            <_Text textStyle={styles.value}>{country.population}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Top Level Domain : </_Text>
            <_Text textStyle={styles.value}>{country.topLevelDomain}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Demonym : </_Text>
            <_Text textStyle={styles.value}>{country.demonym}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Area : </_Text>
            <_Text textStyle={styles.value}>{country.area} sqkm</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Timezone : </_Text>
            <_Text textStyle={styles.value}>{country.timezones}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Borders : </_Text>
            <_Text textStyle={styles.value}>
              {`${alpha3code[`${country.borders[0]}`]},\n${
                alpha3code[`${country.borders[1]}`]
              },\n${alpha3code[`${country.borders[2]}`]}`}
            </_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Native Name : </_Text>
            <_Text textStyle={styles.value}>{country.nativeName}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Numeric Code : </_Text>
            <_Text textStyle={styles.value}>{country.numericCode}</_Text>
          </View>
          {/* <View style={styles.list}>
            <_Text textStyle={styles.key}>Phone Code : </_Text>
            <_Text textStyle={styles.value}>+234</_Text>
          </View> */}
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Currency : </_Text>
            <_Text
              textStyle={styles.value}
            >{`${country.currencies[0].name} (${country.currencies[0].code}) ${country.currencies[0].symbol}`}</_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Official Language(s) : </_Text>
            <_Text textStyle={styles.value}>
              {/* {country.languages[0].name} */}
              {country.languages.length > 0 ? (
                <_Text textStyle={styles.value}>
                  {country.languages.map((c) => `${c.name}\n`)}
                </_Text>
              ) : (
                <_Text textStyle={styles.value}>NILL</_Text>
              )}
            </_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Name Translation : </_Text>
            <_Text textStyle={styles.value}>
              German = {country.translations.de}
              {'\n'}Spain = {country.translations.es}
              {'\n'}France = {country.translations.fr}
              {'\n'}Japan = {country.translations.ja}
              {'\n'}Italy = {country.translations.it}
              {'\n'}Brazil ={country.translations.br}
              {'\n'}Portugal = {country.translations.pt}
              {'\n'}Netherland = {country.translations.nl}
              {'\n'}
              Croatia = {country.translations.hr}
              {'\n'}Saudi Arabia = {country.translations.fa}
            </_Text>
          </View>
          <View style={styles.list}>
            <_Text textStyle={styles.key}>Regional Bloc(s) : </_Text>
            {country.regionalBlocs.length > 0 ? (
              <_Text textStyle={styles.value}>
                {country.regionalBlocs.map((c) => `${c.name}\n`)}
              </_Text>
            ) : (
              <_Text textStyle={styles.value}>NILL</_Text>
            )}
          </View>
          {/* End */}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: _normzer(20),
    flex: 1,
  },
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.8,
    // paddingBottom: _normzer(5),
    paddingVertical: _normzer(10),
    // marginBottom: _normzer(5),
    alignItems: 'flex-start',
  },
  key: { fontSize: _normzer(21), flexShrink: 0 },
  value: { fontSize: _normzer(23), flexShrink: 1 },
});
