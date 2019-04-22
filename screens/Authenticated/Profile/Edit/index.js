import React from 'react';
import background from '../../../../assets/images/background/wave.png';

import connect from 'utils/connect';

import * as UI from './ui'

class EditScreen extends React.Component {
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
      <UI.Screen background={background}>
        <UI.Text>EditScreen</UI.Text>
        <UI.Button onPress={onNavigate('Profile')}>Profile</UI.Button>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(EditScreen);
