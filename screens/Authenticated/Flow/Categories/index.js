import React from 'react';
import { For } from 'react-loops';
import connect from 'utils/connect';
import background from '../../../../assets/images/background/wave.png';

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

  onPressCategory = async (category) => {
    const { Offer, navigation, me } = this.props

    const offers = await Offer.find({
      filter: {
        order: 'DESC',
        include: [
          'member',
          'category',
          'subCategory',
          {
            relation: 'favorite',
            scope: {
              where: {
                memberId: me.id
              }
            }
          },
        ],
        where: {
          categoryId : category.id
            ? category.id
            : undefined
          },
      }
    })

    navigation.navigate('Offers', category)

  }
  render() {
    const { categories } = this.props;
    const { onNavigate, onPressCategory } = this;

    return (
      <UI.Screen scroll>
          {/*<UI.Header background={require('assets/images/background/island.png')}>*/}
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
            <UI.Categories>
              <UI.Component.Zapping onPress={() => onPressCategory({title: 'Zapping'})}/>
              {
                categories.map((category, index) => (
                  <UI.Category
                    key={category.id}
                    onPress={() => onPressCategory(category)}
                    model={category}
                    index={index}
                  />
                ))
              }
            </UI.Categories>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
    categories: state.categories,
  }),
  (dispatch, props, models) => ({
    Category: models.Category,
    Offer: models.Offer,
  }),
)(CategoriesScreen);
