import React from 'react';
import { View, Image, AsyncStorage } from 'react-native'
import Logo from 'components/Logo'

import connect from 'utils/connect';

class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      const { navigation, me } = this.props
      console.log('me : ', me);
      navigation.navigate(me
        ? 'Flow'
        : 'Home'
      )
    }, 300)
  }
  render() {
    const { me } = this.props
    return (
      <View style={{flex: 1}}>
        <Image
          source={require('assets/splash.png')}
          style={{
            width: '100%',
            height: '100%',
          }}
          resizeMode="cover"
        />
        <View style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          // TODO Remove tricks when Ewa send good assets
          paddingTop: 80,
          paddingRight: 5
        }}>
          <Logo transition={me ? false : true}/>
        </View>

      </View>
    )

  }
}

export default connect(
  state => ({
    me: state.me
  })
)(SplashScreen)
