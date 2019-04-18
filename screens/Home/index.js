import React from 'react';

import connect from 'utils/connect';

import { NavigationActions } from 'react-navigation';

import * as UI from './ui'

class HomeScreen extends React.Component {
  onPressOffer = offer => {
    this.props.navigation.navigate('Offer', { offer })
  }

  componentWillMount = async () => {
    const { Offer } = this.props;
    Offer.find()
  }

  render() {
    const { offers } = this.props;

    return (
      <UI.Screen>
        <UI.Carousel
          offers={offers}
          onPress={this.onPressOffer}
        />
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    users: state.users,
    offers: state.offers,
  }),
  (dispatch, props, models) => ({
    User: models.User,
    Offer: models.Offer,
  }),
)(HomeScreen);
