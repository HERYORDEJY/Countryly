/* @flow weak */

// const { connectToDevTools } = require('react-devtools-core');
// const config = { host: 'localhost', port: 8081 };
// connectToDevTools(config);
//
import React from 'react';
import { View } from 'native-base';
import _Text from './components/Text';
//
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import StackNavigation from './navigation/StackNavigation';
//
// import StackNavigation from './navigation/StackNavigation';
//

let customFonts = {
  'Garamond-Regular': require('./assets/fonts/Garamond.ttf'),
  'Garamond-Bold': require('./assets/fonts/Garamond-Bold.ttf'),
  // 'Garamond Narrow': require('./assets/fonts/Garamond Narrow.TTF'),
  // 'Garamond Narrow Italic': require('./assets/fonts/Garamond Narrow Italic.TTF'),
};

// SplashScreen.preventAutoHideAsync()
//   .then((result) =>
//     console.log(`Splashscreen preventAutoHideAsync() succeeded: ${result}`),
//   )
//   .catch(console.warn);

export default class EntryPoint extends React.Component {
  constructor(props) {
    super(props);
    this._drawer = React.createRef();
    this.state = {
      openDrawer: false,
      fontLoaded: false,
      customTextProps: {
        style: {
          fontFamily: 'Garamond-Regular',
        },
      },
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    await setCustomText(this.state.customTextProps);
    await setCustomTextInput(this.state.customTextProps);
    this.setState({ fontLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    console.disableYellowBox = true;
  }

  render() {
    const customTextProps = {
      style: {
        fontFamily: 'Product-Regular',
      },
    };
    if (this.state.fontLoaded) {
      return (
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      );
    } else {
      return <AppLoading />;
    }
  }
}
