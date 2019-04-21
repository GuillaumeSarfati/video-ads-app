import React from 'react';
import { For } from 'react-loops';
import connect from 'utils/connect';
import background from '../../../../assets/images/background/wave.png';
import { Transition } from 'react-navigation-fluid-transitions';

import * as UI from './ui'

class CategoriesScreen extends React.Component {
  // componentWillMount = async () => {
  //   const { Category } = this.props;
  //   Category.find()
  // }

  onNavigate = screen => category => {
    const { Category, navigation } = this.props
    Category.set(category)
    navigation.navigate(screen)
  }

  render() {
    console.log('[ SCREEN CATEGORIES ] render : ', this.props);
    const { categories } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen background={background} scroll>
          <Transition appear="top">
          <UI.Header>
            <UI.Title>Petites Annonces</UI.Title>
          </UI.Header>
          </Transition>
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
