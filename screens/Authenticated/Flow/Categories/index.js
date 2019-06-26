import React from 'react';
import { For } from 'react-loops';
import connect from 'utils/connect';
import background from '../../../../assets/images/background/wave.png';

import { Transition } from 'react-navigation-fluid-transitions';

import * as UI from './ui'

class CategoriesScreen extends React.Component {
  componentWillMount = async () => {
    const { Category } = this.props;
    const { categories } = this.props;

    Category.find()
    if (!categories.length) Category.find()
    if (!categories.length) Category.find({ include: 'offers' })
  }

  onNavigate = screen => category => {
    const { Offer, Category, navigation } = this.props
    Category.set(category)

    Offer.set(category.offers)
    // Offer.find({filter: { where: { categoryId: category.id }}})
    navigation.navigate(screen, { category, hideTabBar: true })
  }

  render() {
    const { categories } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen scroll>
          <Transition appear="top">
          <UI.Header background={require('assets/images/background/island.png')}>
            <UI.Search
              onSearch={(query) => console.log(query)}
              onPressFilter={onNavigate('Search')}
            />
            <UI.Screen.Column style={{paddingVertical: 30}}>
              <UI.Title style={{paddingBottom: 30}}>Trouver un service video</UI.Title>
              <UI.Screen.Description light>Lorem ipsum dolor sit amet, jkhsdfhsd dhksjhf, dhsfg dh dsj.</UI.Screen.Description>
            </UI.Screen.Column>
          </UI.Header>
          </Transition>
          <Transition appear="bottom">
            <UI.Categories>
              {
                categories.map((category, index) => (
                  <UI.Category
                    key={category.id}
                    onPress={() => onNavigate('Category')(category)}
                    model={category}
                    index={index}
                  />
                ))
              }
            </UI.Categories>
          </Transition>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    categories: state.categories,
  }),
  (dispatch, props, models) => ({
    Category: models.Category,
    Offer: models.Offer,
  }),
)(CategoriesScreen);
