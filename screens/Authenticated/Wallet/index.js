import React from 'react';
import { Dimensions } from 'react-native';
import connect from 'utils/connect';

import * as UI from './ui'

class CommentScreen extends React.Component {
  state = {
    current: null,
  }

  componentWillMount() {
    const { Packs } = this.props;

    Packs.find()
  }

  onChange = property => value => {
    this.setState({[property]: value})
  }

  onSave = async () => {
    const { Comment, Rating } = this.props
    const { me, offer } = this.props

    const comment = (await Comment.create({ text: this.state.text, offerId: offer.id, memberId: me.id })).value.data
    console.log('COMMENT : ', comment);
    const rating = (await Rating.create({ stars: this.state.stars, offerId: offer.id, memberId: me.id, commentId: comment.id })).value.data

    this.onNavigate()()
  }

  onNavigate = screen => async e => {
    const { navigation } = this.props

    return screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  onPressPack = current => e => this.setState({ current })

  render() {
    const { me, packs } = this.props;
    const { current } = this.state;
    const { onPressPack, onNavigate } = this;

    return (
      <UI.Screen style={{justifyContent: 'space-between'}}>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Boutique Pop Eye
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>{ me.coins } Eyes cubes</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Row style={{flexWrap: 'wrap', justifyContent: 'center'}}>
          {
            packs.map(pack => (
              <UI.Component.Choice
              onPress={onPressPack(pack)}
              selected={pack === current}
              {...pack}
              />
            ))
          }
        </UI.Screen.Row>

        <UI.Screen.Footer>
          <UI.Button type={current ? 'primary': 'default'} onPress={onNavigate('CreditCard')}>Acheter</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
    packs: state.packs,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
    Packs: models.Packs,
  }),
)(CommentScreen);
