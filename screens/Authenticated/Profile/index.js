import React from 'react';

import connect from 'utils/connect';
import background from '../../../assets/images/background/wave.png';

import * as UI from './ui'

class ProfileScreen extends React.Component {
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { models } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen source={background}>
        <UI.Text>ProfileScreen</UI.Text>
        <UI.Button onPress={onNavigate('Edit')}>Edit</UI.Button>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(ProfileScreen);
