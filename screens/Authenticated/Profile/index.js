import React from 'react';

import connect from 'utils/connect';
import background from '../../../assets/images/background/wave.png';

import * as UI from './ui'

class ProfileScreen extends React.Component {
  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
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
          <UI.Screen.Row style={{justifyContent: "space-between", alignItems: 'center', padding: 30}}>
            <UI.Shadow>
            <UI.Avatar source={{uri: me.picture}} size={80}/>
            </UI.Shadow>
            <UI.Screen.Column style={{justifyContent: 'center'}}>
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
            <UI.List.Item>
              <UI.List.Item.Title>Porte-monnaie</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item onPress={onSwitch}>
              <UI.List.Item.Title>
                {
                  me.mode === 'supplier'
                  ? 'Switcher en tant que particulier'
                  : 'Switcher en tant que prestataire'
                }
              </UI.List.Item.Title>
            </UI.List.Item>
          </UI.List>
          <UI.List>
            <UI.List.Title>AIDE</UI.List.Title>
            <UI.List.Item>
              <UI.List.Item.Title>FAQs</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item>
              <UI.List.Item.Title>Mentions légales</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item>
              <UI.List.Item.Title>CGU</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item>
              <UI.List.Item.Title>A propos</UI.List.Item.Title>
            </UI.List.Item>
            <UI.List.Item>
              <UI.List.Item.Title>Nous contacter</UI.List.Item.Title>
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
