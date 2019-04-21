import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class HomeScreen extends React.Component {
  componentWillMount = async () => {
    const { Category } = this.props;
    Category.find()
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { models } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen background={require('../../assets/images/background/home.png')}>
        <UI.Logo source={require('../../assets/images/logo.png')}/>
        <UI.Button onPress={onNavigate('Authenticated')}>AuthenticatedScreen</UI.Button>
        <UI.Button onPress={onNavigate('Signup')}>Signup</UI.Button>
        <UI.Button onPress={onNavigate('Login')}>Login</UI.Button>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({
    Category: models.Category,
  }),
)(HomeScreen);
