import React from 'react';
import { AsyncStorage, YellowBox } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { useScreens } from 'react-native-screens';
import { createAppContainer } from 'react-navigation';

import Screens from 'screens';
import makeStore from 'utils/store';

const { store, persistor } = makeStore();

YellowBox.ignoreWarnings(['Class EX*']);

// AMAZING
// https://reactnavigation.org/docs/en/react-native-screens.html
useScreens();

// Show HTTP Request in chrome debugger
XMLHttpRequest = GLOBAL.originalXMLHttpRequest
  ? GLOBAL.originalXMLHttpRequest
  : GLOBAL.XMLHttpRequest;

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  _loadResourcesAsync = async () => {
    const { me, accessToken } = JSON.parse(await AsyncStorage.getItem('persist:root'))

    this.Navigation = me && me !== "null" && accessToken && accessToken !== "null"
      ? createAppContainer(Screens.Authenticated)
      : createAppContainer(Screens.Unauthenticated)

    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/tab/home.png'),
        require('./assets/images/categories/default.png'),
        require('./assets/images/background/home.png'),
        require('./assets/images/background/wave.png'),
        require('./assets/images/header/back.png'),
        require('./assets/images/illustration.png'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };


  render() {
    const { Navigation } = this;

    return !this.state.isLoadingComplete
    ? (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
    )
    : (
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigation />
          </PersistGate>
        </Provider>
    );
  }
}
