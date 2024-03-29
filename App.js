import React from 'react';
import { View, AsyncStorage, YellowBox, Dimensions, UIManager } from 'react-native';

import { AppLoading, Asset, Font, SplashScreen } from 'expo';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { useScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';
import makeStore from 'utils/store';

import Screens from 'screens';
import Modals from 'modals';
import Loading from 'modals/loading';

const { store, persistor } = makeStore();

if (typeof(Number.prototype.toRad) === "undefined") {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }
}

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

        require('assets/images/payment/card.png'),
        require('assets/images/payment/visa.png'),
        require('assets/images/payment/mastercard.png'),
        require('assets/images/payment/westernunion.png'),

        require('assets/images/packs/wallet.png'),
        require('assets/images/packs/bag.png'),
        require('assets/images/packs/bags.png'),
        require('assets/images/packs/chest.png'),

        require('assets/images/sad.png'),
        require('assets/images/change.png'),
        require('assets/images/error.png'),
        require('assets/images/success.png'),
        require('assets/images/scan.png'),
        require('assets/images/play.png'),
        require('assets/images/tab/home.png'),
        require('assets/images/categories/default.png'),
        require('assets/images/background/home.png'),
        require('assets/images/background/wave.png'),
        require('assets/images/background/island.png'),
        require('assets/images/header/back.png'),
        require('assets/images/illustration.png'),
        require('assets/images/logo.png'),
        require('assets/images/record/progress.png'),
        require('assets/images/gradient.png'),

        require('assets/images/rating/star-fill.png'),
        require('assets/images/rating/star-empty.png'),
        require('assets/images/rating/star.png'),
        require('assets/images/rating/star-border-yellow.png'),
        require('assets/images/rating/star-border-grey.png'),

        require('assets/images/supplier.png'),
        require('assets/images/consumer.png'),
      ]),
      Font.loadAsync({
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Ionicons': require('./node_modules/@expo/vector-icons/fonts/Ionicons.ttf'),
        'MaterialIcons': require('./node_modules/@expo/vector-icons/fonts/MaterialIcons.ttf'),
      }),
    ]);
  };

  render() {
    const { Navigation } = this;
    const { isSplashReady, isAppReady } = this.state;

    if (isAppReady) {
      return (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Loading />
            <Modals />
            <Screens />
          </PersistGate>
        </Provider>
      );
    }
    return null;
  }
}
