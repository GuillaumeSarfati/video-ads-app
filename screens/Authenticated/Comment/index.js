import React from 'react';
import { Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class CommentScreen extends React.Component {
  state = {
    mode: 'consumer',
  }

  onComment = () => {

  }

  onRate = star => {

  }

  onNavigate = screen => async e => {
    const { navigation } = this.props

    return screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  render() {
    const { me } = this.props;
    const { onComment, onRate, onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Pop Annonce
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Laisser un avis</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Column style={{ flex: 1, justifyContent: 'center', padding: 30 }}>
          <UI.Description>Ne vous inquiétez pas vous pouvez a tout moment switcher de profil pour devenir prestataire ou bien rechercher des services</UI.Description>

          <UI.Screen.Column style={{ paddingVertical: 30 }}>
            <UI.Component.RatingInput onChange={onRate} />
          </UI.Screen.Column>

          <UI.Component.TextInput placeholder="placeholder" multiline/>
        </UI.Screen.Column>
        <UI.Screen.Footer>
          <UI.Button onPress={onComment}>Valider l'avis</UI.Button>
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
)(CommentScreen);
