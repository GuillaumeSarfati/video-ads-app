import React from 'react';
import { ActivityIndicator, Dimensions } from 'react-native';
import Lottie from 'lottie-react-native'

import * as UI from './ui';

export default class Loading extends React.Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
  }
  render() {
    return (
      <UI.Shadow style={{
        position: 'absolute',
        zIndex: 9999,
        backgroundColor: 'white',
        width: 100,
        height: 100,
        borderRadius: 16,
        left: Dimensions.get('window').width / 2 - 50,
        top: Dimensions.get('window').height / 2 - 50,
        justifyContent: 'center',
        alignItems:  'center',
      }}>
      <UI.Screen.Column style={{
        width: 100,
        height: 100,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems:  'center',
      }}>
      <Lottie
        ref={animation => {
          this.animation = animation;
        }}
        style={{
          width: 100,
          height: 100,
        }}
        source={require('assets/animations/loading.json')}
        loop
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      </UI.Screen.Column>
      </UI.Shadow>
    )
  }
}
