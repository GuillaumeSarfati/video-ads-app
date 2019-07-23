import React from 'react';

import connect from 'utils/connect';
import background from '../../../assets/images/background/wave.png';

import * as UI from './ui'

class ProfileScreen extends React.Component {
  onNavigate = (screen, params) => e => {
    const { navigation } = this.props

    navigation.navigate(screen, params)
  }

  onLogout = screen => e => {
    const { Member } = this.props;
    const { onNavigate } = this;

    Member.clear()

    onNavigate(screen)(e)
  }

  onSwitch = e => {
    const { Member, me } = this.props;

    Member.patchAttributesById(me.id, {
      mode: me.mode === 'consumer'
        ? 'supplier'
        : 'consumer'
      })
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.me
  }

  render() {
    const { me } = this.props;
    const { onNavigate, onSwitch, onLogout } = this;

    return (
      <UI.Screen scroll>
        <UI.Screen.Header background>
          <UI.Screen.Row style={{justifyContent: "center", alignItems: 'center'}}>
            <UI.Shadow>
            <UI.Avatar source={{uri: me.picture}} size={80}/>
            </UI.Shadow>
            <UI.Screen.Column style={{justifyContent: 'center', padding: 15}}>
              <UI.Component.Text style={{fontWeight: '900', fontSize: 32, color: 'white'}}>{me.firstname} {me.lastname}</UI.Component.Text>
              <UI.Screen.Header.Subtitle>
              {
                me.mode === 'supplier'
                ? 'Connecté en tant que prestataire'
                : 'Connecté en tant que particulier'
              }

              </UI.Screen.Header.Subtitle>
            </UI.Screen.Column>
          </UI.Screen.Row>
        </UI.Screen.Header>
        <UI.Screen.Content>
          <UI.List>
            <UI.List.Title>PROFIL</UI.List.Title>
            <UI.List.Item onPress={onNavigate('Edit')}>
              <UI.List.Item.Title>Informations personnelles</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item onPress={onSwitch}>
            <UI.Screen.Row style={{alignItems: 'space-between'}}>
            <UI.List.Item.Title style={{flex: 1}}>
            {
              me.mode === 'supplier'
              ? 'Switcher en tant que particulier'
              : 'Switcher en tant que prestataire'
            }
            </UI.List.Item.Title>
            <UI.Component.Image style={{width: 20, height:15}} source={require('assets/images/change.png')} />
            </UI.Screen.Row>
            </UI.List.Item>
            <UI.List.Item onPress={onNavigate('Wallet')}>
              <UI.List.Item.Title>Porte-monnaie</UI.List.Item.Title>
            </UI.List.Item>
          </UI.List>
          <UI.List>
            <UI.List.Title>AIDE</UI.List.Title>

            <UI.List.Item onPress={onNavigate('External', { uri: 'https://pop-eye.fr/confiance-popeye' })}>
              <UI.List.Item.Title>FAQs</UI.List.Item.Title>
            </UI.List.Item>

            <UI.List.Item onPress={onNavigate('External', { uri: 'https://pop-eye.fr/mentions-legales' })}>
              <UI.List.Item.Title>Mentions légales</UI.List.Item.Title>
            </UI.List.Item>

            <UI.List.Item onPress={onNavigate('External', { uri: 'https://pop-eye.fr/cgu' })}>
              <UI.List.Item.Title>CGU</UI.List.Item.Title>
            </UI.List.Item>

            <UI.List.Item>
              <UI.List.Item.Title onPress={onNavigate('External', { uri: 'https://pop-eye.fr/a-propos-de-nous-notre-philosophie' })}>A propos</UI.List.Item.Title>
            </UI.List.Item>

            <UI.List.Item>
              <UI.List.Item.Title onPress={onNavigate('External', { uri: 'https://pop-eye.fr/nous-contacter' })}>Nous contacter</UI.List.Item.Title>
            </UI.List.Item>

          </UI.List>

          <UI.List>
            <UI.List.Title>BÊTA</UI.List.Title>

            <UI.List.Item onPress={onNavigate('Developer')}>
              <UI.List.Item.Title>Developer</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item onPress={onNavigate('Feedback')}>
              <UI.List.Item.Title>Feedback</UI.List.Item.Title>
            </UI.List.Item>
          </UI.List>

        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button type="default" onPress={onLogout('Home')} large>Deconnexion</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
  }),
)(ProfileScreen);
