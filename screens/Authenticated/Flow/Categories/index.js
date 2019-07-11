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
    if (category) {
      Category.set(category)
      Offer.set(category.offers)
      navigation.navigate(screen, category)
    }
    else {
      navigation.navigate(screen, { title: 'Zapping'})
    }
  }

  render() {
    const { categories } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen scroll>
          {/*<UI.Header background={require('assets/images/background/island.png')}>*/}
          <Transition appear="top">
          <UI.Header>
            <UI.Screen.Column style={{paddingHorizontal: 15}}>
              <UI.Search
                onSearch={(query) => console.log(query)}
                onPressFilter={onNavigate('Search')}
              />
            </UI.Screen.Column>
            <UI.Screen.Column style={{paddingTop: 30}}>
              <UI.Screen.Header.Title style={{paddingBottom: 30}} dark>Trouver un service video</UI.Screen.Header.Title>
              <UI.Screen.Description style={{paddingLeft: 15}}>Lorem ipsum dolor sit amet, jkhsdfhsd dhksjhf, dhsfg dh dsj.</UI.Screen.Description>
            </UI.Screen.Column>
          </UI.Header>
          </Transition>
          <Transition appear="bottom">
            <UI.Categories>
              <UI.Component.Zapping onPress={() => onNavigate('Offers')()}/>
              {
                categories.map((category, index) => (
                  <UI.Category
                    key={category.id}
                    onPress={() => onNavigate('Offers')(category)}
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
