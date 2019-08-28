import React from 'react';
import * as UI from './ui';

const backgrounds = {
  0: require('assets/images/categories/1.png'),
  1: require('assets/images/categories/2.png'),
  2: require('assets/images/categories/3.png'),
  3: require('assets/images/categories/4.png'),
  4: require('assets/images/categories/5.png'),
  5: require('assets/images/categories/6.png'),
}
export default ({model, index, ...props}) => (
    <UI.Component index={index} source={backgrounds[index % 5]}>
      <UI.Category {...props}>
        <UI.Category.Header>
        </UI.Category.Header>
        <UI.Category.Title>{model.title}</UI.Category.Title>
        <UI.Category.View>367 vues</UI.Category.View>
      </UI.Category>
    </UI.Component>
)
