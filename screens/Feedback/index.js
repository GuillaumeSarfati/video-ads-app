import React from 'react';
import { Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class FeedbackScreen extends React.Component {
  state = {
    text: '',
    stars: 5,
  }

  onChange = property => value => {
    this.setState({[property]: value})
  }

  onSave = async () => {
    const { Feedback, Modal } = this.props
    const { me, offer } = this.props

    await Feedback.create({ text: this.state.text, memberId: me.id })

    Modal.open(<UI.Modals.Success
      title="Merci"
      description="Votre contribution est importante."
    />)

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
              Settings
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Votre Feedback c'est important !</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Column style={{ flex: 1, justifyContent: 'center', padding: 30 }}>
          <UI.Description>Lorem ipsum dolor sit amet...</UI.Description>

          <UI.Component.TextInput
            onChangeText={onChange('text')}
            placeholder="placeholder"
            multiline
          />
        </UI.Screen.Column>
        <UI.Screen.Footer>
          <UI.Button onPress={onSave}>Envoyer un Feedback</UI.Button>
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
    Feedback: models.Feedback,
    Modal: models.Modal,
  }),
)(FeedbackScreen);
