import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class EditScreen extends React.Component {
  state = this.props.me

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
    ? navigation.navigate(screen)
    : navigation.pop()
  }

  onChange = property => value => {
    this.setState({ [property]: value })
  }

  onSave = async () => {
    const { Member, navigation } = this.props
    try {
      await Member.patchAttributesById(this.state.id, this.state)
      navigation.pop()
    }
    catch (e) {
      console.log('ERROR : ', e)
    }
  }
  render() {
    const { me } = this.props;
    const { onNavigate, onChange, onSave } = this;

    return (
      <UI.Screen scroll>

        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Informations personnelles
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>

          <UI.Screen.Row style={{paddingHorizontal: 15, paddingTop: 40}}>
            <UI.Avatar source={{uri: me.picture}} size={80}/>
            <UI.Screen.Column>
              <UI.Screen.Header.Title dark>{me.firstname} {me.lastname}</UI.Screen.Header.Title>
            </UI.Screen.Column>
          </UI.Screen.Row>


        </UI.Screen.Header>

        <UI.Screen.Content>

        <UI.Screen.Row style={{paddingHorizontal: 30}}>
          <UI.Button type={this.state.gender === 'female' ? "primary" : "default"} onPress={() => onChange('gender')('female')}>Femme</UI.Button>
          <UI.Button type={this.state.gender === 'male' ? "primary" : "default"} onPress={() => onChange('gender')('male')}>Homme</UI.Button>
        </UI.Screen.Row>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
          <UI.Component.TextInput
            onChangeText={onChange('firstname')}
            value={this.state.firstname}
            placeholder="Prénom"
          />
          <UI.Component.TextInput
            onChangeText={onChange('lastname')}
            value={this.state.lastname}
            placeholder="Nom"
          />

          <UI.Component.TextInput
            onChangeText={onChange('birthdate')}
            value={this.state.birthdate}
            placeholder="Date de naissance"
          />

          <UI.Component.TextInput
            onChangeText={onChange('description')}
            value={this.state.description}
            placeholder="Description"
            multiline
          />

          <UI.Screen.Liner dark/>
        </UI.Screen.Column>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
          <UI.Screen.Label dark>INFORMATIONS DE CONTACT</UI.Screen.Label>
          <UI.Component.TextInput
            onChangeText={onChange('email')}
            value={this.state.email}
            placeholder="Email"
          />
          <UI.Component.TextInput
            onChangeText={onChange('phoneNumber')}
            value={this.state.phoneNumber}
            placeholder="Numéro de téléphone"
          />
          <UI.Screen.Liner dark/>
        </UI.Screen.Column>

        </UI.Screen.Content>

        <UI.Screen.Footer>
          <UI.Button large onPress={onSave}>Sauvegarder</UI.Button>
        </UI.Screen.Footer>

      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
  }),
)(EditScreen);
