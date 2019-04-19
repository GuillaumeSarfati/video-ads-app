import React from 'react';
import { For } from 'react-loops';
import connect from 'utils/connect';

import * as UI from './ui'

class CategoriesScreen extends React.Component {
  componentWillMount = async () => {
    const { Category } = this.props;
    Category.find();
  }

  onNavigate = screen => category => {
    const { Offer, Category, navigation } = this.props
    Offer.find(category)
    Category.set(category)
    navigation.navigate(screen)
  }

  render() {
    console.log('[ SCREEN CATEGORIES ] render : ', this.props);
    const { categories } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen>
        <UI.Categories>
          <For of={categories} as={(category, {index}) => (
            <UI.Category onPress={() => onNavigate('Category')(category)} model={category} index={index}/>
          )}/>
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
