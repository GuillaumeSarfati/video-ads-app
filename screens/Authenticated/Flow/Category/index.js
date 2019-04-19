import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class CategoryScreen extends React.Component {
  onPressOffer = offer => {
    this.props.navigation.navigate('Offer', { offer })
  }

  componentWillMount = async () => {
    const { Offer } = this.props;
    await Offer.find()
    console.log('[ HOME SCREEN ] componentWillMount : ');
  }

  componentDidMount = async () => {
    const { Offer } = this.props;
    await Offer.find()
    console.log('[ HOME SCREEN ] componentDidMount : ');
  }

  onGoBack = e => {
    const { Category, navigation } = this.props
    Category.clear()
    navigation.goBack()
  }
  render() {
    console.log('[ HOME SCREEN ] render : ', this.props);
    const { category, offers } = this.props;

    return (
      <UI.Screen>
        <UI.Header onPress={this.onGoBack}>
          <UI.Category>{category.title}</UI.Category>
        </UI.Header>
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
