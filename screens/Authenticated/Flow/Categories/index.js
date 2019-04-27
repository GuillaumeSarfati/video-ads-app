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

    if (!categories.length) Category.find()
  }

  onNavigate = screen => category => {
    const { Category, navigation } = this.props
    Category.set(category)

    navigation.navigate(screen, { category, hideTabBar: true })
  }

  render() {
    const { categories } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen scroll>
          <Transition appear="top">
          <UI.Header background>
            <UI.Title>Petites Annonces</UI.Title>
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
  }),
)(CategoriesScreen);
