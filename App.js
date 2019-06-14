import React from 'react';
import { View, AsyncStorage, YellowBox, Dimensions } from 'react-native';
import { AppLoading, Asset, Font, SplashScreen } from 'expo';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { useScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import makeStore from 'utils/store';

import Screens from 'screens';

const { store, persistor } = makeStore();


// TODO comment
// Ignore all Yellow box
console.disableYellowBox = true
// YellowBox.ignoreWarnings(['Class EX*']);

// AMAZING
// https://reactnavigation.org/docs/en/react-native-screens.html
useScreens();

// Show HTTP Request in chrome debugger
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

export default class App extends React.Component {
  state = {
    isAppReady: false,
    isSplashReady: false,
  };

  constructor(props) {
    super(props);
    SplashScreen.preventAutoHide();
  }

  componentDidMount = async () => {
    await this.cacheResourcesAsync()
    this.setState({ isAppReady: true }, () => {
      setTimeout(() => SplashScreen.hide(), 300)
    })
  }

  cacheResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('assets/splash.png'),
        require('assets/images/tab/home.png'),
        require('assets/images/categories/default.png'),
        require('assets/images/background/home.png'),
        require('assets/images/background/wave.png'),
        require('assets/images/header/back.png'),
        require('assets/images/illustration.png'),
        require('assets/images/logo.png'),
        require('assets/images/record/progress.png'),
        require('assets/images/gradient.png'),
      ]),
      Font.loadAsync({
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };
  // TODO try more
  // <View style={{
  //   position: 'absolute',
  //   top: - (896 - 568) / 2,
  //   left: - (414 - 320) / 2,
  //   width: 414, // 320
  //   height: 896, // 568
  //
  //   transform: [
  //     { scaleX: 320 / 414 },
  //     { scaleY: 320 / 414 },
  //   ]
  // }}>
  render() {
    const { Navigation } = this;
    const { isSplashReady, isAppReady } = this.state;
    console.log('Dimensions : ', Dimensions.get("window"));
    if (isAppReady) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Screens />
          </PersistGate>
        </Provider>
      );
    }
    return null;
  }
}
