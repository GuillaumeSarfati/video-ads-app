import React from 'react';

import * as UI from './ui';

const starFill = require('assets/images/rating/star.png')
const starEmpty = require('assets/images/rating/star-border-yellow.png')

export default class RatingInput extends React.Component {
  state = {
    stars: [
      false,
      false,
      false,
      false,
      false,
    ]
  }

  onPress = index => e => this.setState({
    stars: this.state.stars.map((star, i) => index >= i)
  }, () => this.props.onChange(index + 1))

  render() {
    const { onPress } = this
    const { stars } = this.state

    return (
      <UI.Component.Row>
        {
          stars.map((star, i) => (
            <UI.Component.TouchableOpacity key={"rating-input-" + i} onPress={onPress(i)}>
              <UI.Star source={star ? starFill : starEmpty}/>
            </UI.Component.TouchableOpacity>
          ))
        }
      </UI.Component.Row>
    )
  }
}
