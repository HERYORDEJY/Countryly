import React, { Component, PureComponent } from 'react';
import { Animated, StyleSheet, Text, TextInput, View } from 'react-native';
import _Text from './Text';
import { darkBlue, darkBlue2, light } from '../styles/color';
import _Logo from './Logo';
import normzer from '../utils/normalizer';
import { Icon, Input } from 'native-base';
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from 'react-native-gesture-handler';
import _NavBarItems from './NavBarItems';

let isHidden = true;

class _NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false,
      bounceValue: new Animated.Value(-3000),
      isModalVisible: false,
    };
  }

  componentDidMount() {
    Animated.spring(this.state.bounceValue, {
      toValue: -3000,
    }).start();
    isHidden = true;
    this.setState({ ...this.state, showNav: false });
  }

  toggleModal = () => {
    this.setState({
      ...this.state,
      isModalVisible: !this.state.isModalVisible,
    });
  };

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
    const { navigation, toggleIcon } = this.props;
    const animatedNavBar = this.state.bounceValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-300, 0],
    });
    return (
      <View
        style={{
          position: 'absolute',
          width: '100%',
          elevation: 10000,
          left: 0,
          right: 0,
          top: 0,
          flex: 0,
          zIndex: 10000,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            borderBottomWidth: 2,
            borderBottomColor: darkBlue2,
            elevation: 10000,
            backgroundColor: light,
          }}
        >
          <View>
            <View style={{ width: normzer(120), height: normzer(50) }}>
              <_Logo />
            </View>
            <_Text
              color={darkBlue}
              textStyle={{ fontSize: normzer(18) }}
              color={darkBlue2}
            >
              ...towards your financial freedom
            </_Text>
          </View>
          <TouchableOpacity
            style={{ justifyContent: 'center', padding: 20, paddingRight: 0 }}
            // onPress={this.toggleNav}
            onPress={() =>
              this.setState({ ...this.state, showNav: !this.state.showNav })
            }
            // onPress={() => this.toggleModal()}
          >
            <Icon
              name={'menu'}
              type={'Feather'}
              style={{ color: darkBlue2, fontSize: normzer(35) }}
            />
          </TouchableOpacity>
        </View>
        {this.state.showNav && (
          <Animatable.View
            animation={'slideInDown'}
            direction={'alternate'}
            easing={'ease-in-out'}
            // style={{ display: this.state.showNav ? 'flex' : 'none' }}
          >
            <_NavBarItems
              bounceValue={this.state.bounceValue}
              navigation={navigation}
              toggleNav={this.toggleIcon}
            />
          </Animatable.View>
        )}
      </View>
    );
  }
}

export default _NavBar;

const styles = StyleSheet.create({ container: { backgroundColor: '#D8DFE2' } });
