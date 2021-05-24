import React, { Component, PureComponent } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import _Text from './Text';
import { darkBlue, darkBlue2, light } from '../styles/color';
import normzer from '../utils/normalizer';
import { Icon, Input } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';

let isHidden = true;

class _NavBarItems extends Component {
  constructor(props) {
    super(props);
    this.state = { showNav: false, bounceValue: new Animated.Value(-3000) };
  }

  toggleNav = () => {
    // this.setState({ ...this.state, showNav: !this.state.showNav });
    let toValue = -3000;

    if (isHidden) {
      toValue = 0;
    }

    Animated.spring(this.state.bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      duration: 800,
    }).start();
    isHidden = !isHidden;
  };

  toggleIcon = () => {
    // this.setState({ ...this.state, showNav: !this.state.showNav });
    let toValue = 90;

    if (isHidden) {
      toValue = 0;
    }

    Animated.spring(this.state.bounceValue, {
      toValue: toValue,
      velocity: 3,
      tension: 2,
      friction: 8,
      duration: 1000,
    }).start();
    isHidden = !isHidden;
  };

  render() {
    const {
      navigation,
      bounceValue,
      toValue,
      isHidden,
      toggleNav,
    } = this.props;
    const animatedNavBar = this.state.bounceValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });
    return (
      <View
        style={{
          flex: 1,
          elevation: 100,
          width: '100%',
          zIndex: 1000,
        }}
      >
        <View
          style={{
            backgroundColor: light,
            width: '100%',
            flex: 0,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: darkBlue2,
              paddingVertical: 15,
              paddingHorizontal: 30,
            }}
            onPress={() => {
              navigation.navigate('Home');
              toggleNav();
            }}
          >
            <_Text color={darkBlue}>Home</_Text>
            <Icon
              name={'chevron-right'}
              type={'FontAwesome'}
              style={{ color: darkBlue, fontSize: normzer(22) }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: darkBlue2,
              paddingVertical: 15,
              paddingHorizontal: 30,
            }}
          >
            <_Text color={darkBlue}>About</_Text>
            <Icon
              name={'chevron-right'}
              type={'FontAwesome'}
              style={{ color: darkBlue, fontSize: normzer(22) }}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: darkBlue2,
              paddingVertical: 15,
              paddingHorizontal: 30,
            }}
            onPress={() => navigation.navigate('Profile')}
          >
            <_Text color={darkBlue}>My Profile</_Text>
            <Icon
              name={'chevron-right'}
              type={'FontAwesome'}
              style={{ color: darkBlue, fontSize: normzer(22) }}
            />
          </TouchableOpacity> */}
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderBottomColor: darkBlue2,
                paddingVertical: 15,
                paddingHorizontal: 30,
              }}
              onPress={() => {
                navigation.navigate('SavedPosts');
                toggleNav();
              }}
            >
              <_Text color={darkBlue}>Saved Posts</_Text>
              <Icon
                name={'chevron-right'}
                type={'FontAwesome'}
                style={{ color: darkBlue, fontSize: normzer(22) }}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: darkBlue2,
              paddingVertical: 15,
              paddingHorizontal: 30,
            }}
            onPress={() => {
              navigation.navigate('Contact');
              toggleNav();
            }}
          >
            <_Text color={darkBlue}>Contact</_Text>
            <Icon
              name={'chevron-right'}
              type={'FontAwesome'}
              style={{ color: darkBlue, fontSize: normzer(22) }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottomWidth: 1,
              borderBottomColor: darkBlue2,
              paddingVertical: 15,
              paddingHorizontal: 30,
              marginTop: 10,
            }}
          >
            <Input
              placeholder={'Search here...'}
              inlineImageLeft={'search'}
              placeholderTextColor={darkBlue + '70'}
              style={{
                // flex: 1,
                fontSize: normzer(20),
                fontFamily: 'Poppins-Italic',
                padding: 0,
                margin: 0,
                height: normzer(25),
              }}
            />
            {/*<Icon*/}
            {/*  name={'search'}*/}
            {/*  type={'FontAwesome'}*/}
            {/*  style={{*/}
            {/*    color: darkBlue + 70,*/}
            {/*    fontSize: 20,*/}
            {/*    alignSelf: 'center',*/}
            {/*  }}*/}
            {/*/>*/}
          </View>
        </View>
      </View>
    );
  }
}

export default _NavBarItems;

const styles = StyleSheet.create({ container: { backgroundColor: '#D8DFE2' } });
