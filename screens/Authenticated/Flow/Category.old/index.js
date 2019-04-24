import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class CategoryScreen extends React.Component {
  componentWillMount() {
    const { Offer, Category } = this.props;
    Category.find()
    Offer.find()
  }

  onPressOffer = offer => {
    this.props.navigation.navigate('Offer', { offer })
  }

  onGoBack = e => {
    const { Category, navigation } = this.props
    Category.clear()
    navigation.goBack()
  }
  render() {
    const { category, offers } = this.props;

    return category && offers ?(
      <UI.Screen>
        <UI.Header onPress={this.onGoBack}>
          <UI.Category>{category.title}</UI.Category>
        </UI.Header>
        <UI.Carousel
          offers={offers}
          onPress={this.onPressOffer}
        />
      </UI.Screen>
    ) : null
  }
}

export default connect(
  state => ({
    category: state.category,
    users: state.users,
    offers: state.offers,
  }),
  (dispatch, props, models) => ({
    Category: models.Category,
    User: models.User,
    Offer: models.Offer,
  }),
)(CategoryScreen);
