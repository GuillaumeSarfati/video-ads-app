import React from 'react';
import { Facebook } from 'expo';
import { LoginButton, LoginManager, AccessToken } from 'react-native-fbsdk';

import connect from 'utils/connect';

import * as UI from './ui'

class HomeScreen extends React.Component {
  componentWillMount = async () => {
    const { Category } = this.props;
    Category.find()
    LoginManager.setLoginBehavior('native')
  }

  onLoginWithFacebook = screen => async e =>   {
    const { Member } = this.props;
    const { onNavigate } = this;

    let accessToken = await AccessToken.getCurrentAccessToken()
    let permission;

    if (!accessToken) {
      permission = await LoginManager.logInWithReadPermissions(["public_profile", "email", "user_gender", "user_birthday"])
      accessToken = await AccessToken.getCurrentAccessToken()
    }

    await Member.facebook(accessToken)
    return onNavigate(screen)(e)

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
    Member: models.Member,
  }),
)(HomeScreen);
