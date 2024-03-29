import React from 'react';
import { Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class CommentScreen extends React.Component {
  state = {
    text: '',
    stars: 5,
  }

  onChange = property => value => {
    this.setState({[property]: value})
  }

  onSave = async () => {
    const { Comment, Rating, Modal } = this.props
    const { me, offer } = this.props

    try {

      const comment = (await Comment.create({ text: this.state.text, offerId: offer.id, memberId: me.id })).value.data
      const rating = (await Rating.create({ stars: this.state.stars, offerId: offer.id, memberId: me.id, commentId: comment.id })).value.data

      Modal.open(<UI.Modals.Success
        title="Merci"
        description="Votre contribution est importante."
        onPress={() => this.props.navigation.pop()}
      />)

    } catch (e) {
      Modal.open(<UI.Modals.Error
        title="Désolé..."
        description="Une erreur est survenue."
      />)
    }

    this.onNavigate()()
  }

  onNavigate = screen => async e => {
    const { navigation } = this.props

    return screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  render() {
    const { me } = this.props;
    const { onChange, onSave, onNavigate } = this;

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

        <UI.Screen.Column style={{ flex: 1, justifyContent: 'flex-start', padding: 30 }}>
          <UI.Description>Lorem ipsum dolor sit amet...</UI.Description>

          <UI.Screen.Column style={{ paddingVertical: 30 }}>
            <UI.Component.RatingInput onChange={onChange('stars')} />
          </UI.Screen.Column>

          <UI.Component.TextInput
            onChangeText={onChange('text')}
            placeholder="placeholder"
            blurOnSubmit
            multiline
          />
        </UI.Screen.Column>
        <UI.Screen.Footer>
          <UI.Button onPress={onSave}>Valider l'avis</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
    offer: state.offer,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
    Modal: models.Modal,
    Comment: models.Comment,
    Rating: models.Rating,
  }),
)(CommentScreen);
