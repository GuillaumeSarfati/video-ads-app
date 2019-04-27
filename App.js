import React from 'react';
import { Platform, StatusBar, StyleSheet, View, YellowBox } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { useScreens } from 'react-native-screens';

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

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <Screens />
            </PersistGate>
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
