import React from 'react';
import { Facebook } from 'expo';
import connect from 'utils/connect';

import * as UI from './ui'

class HomeScreen extends React.Component {
  componentWillMount = async () => {
    const { Category } = this.props;
    Category.find()
  }

  onLoginWithFacebook = screen => async e => {
    try {
      const {
        type,
        token,
        expires,
        permissions,
        declinedPermissions,
      } = await Facebook.logInWithReadPermissionsAsync('2939442116096697', {
        behavior: 'native',
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Get the user's name using Facebook's Graph API
        const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
        Alert.alert('Logged in!', `Hi ${(await response.json()).name}!`);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      Alert.alert(`Facebook Login Error: ${message}`);
    }
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { models } = this.props;
    const { onNavigate, onLoginWithFacebook } = this;

    return (
      <UI.Screen background={require('assets/images/background/home.png')}>
        <UI.Content>
          <UI.Logo source={require('assets/images/logo.png')}/>
          <UI.Title center shadow>Les petites annonces vidéos</UI.Title>
          <UI.Subtitle center>Connectez-vous pour démarrer</UI.Subtitle>
          <UI.Login>
            <UI.Button type="facebook" large onPress={onLoginWithFacebook('Authenticated')}>via Facebook</UI.Button>
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
