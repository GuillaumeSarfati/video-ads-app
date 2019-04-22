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
      <UI.Screen background={require('assets/images/background/home.png')}>
        <UI.Content>
          <UI.Logo source={require('assets/images/logo.png')}/>
          <UI.Title>Les petites annonces vidéos</UI.Title>
          <UI.Subtitle>Connectez-vous pour démarrer</UI.Subtitle>
          <UI.Login>
            <UI.Button type="facebook" large onPress={onNavigate('Authenticated')}>via Facebook</UI.Button>
            <UI.Button type="default" large onPress={onNavigate('Login')}>via Email</UI.Button>
          </UI.Login>
        </UI.Content>
        <UI.Signup>
            <UI.Signup.Text>Vous n'avez pas de compte ? </UI.Signup.Text>
            <UI.Signup.Link onPress={onNavigate('Signup')}>
              <UI.Signup.Text.Underline>S'inscrire</UI.Signup.Text.Underline>
            </UI.Signup.Link>
        </UI.Signup>

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
