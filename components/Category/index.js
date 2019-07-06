import React from 'react';
import * as UI from './ui';

export default ({model, index, ...props}) => (
    <UI.Component index={index}>
      <UI.Category {...props}>
        <UI.Category.Header>
          <UI.Category.Image source={require('assets/images/categories/default.png')}/>
        </UI.Category.Header>
        <UI.Category.Title>{model.title}</UI.Category.Title>
        <UI.Category.View>367 vues</UI.Category.View>
      </UI.Category>
    </UI.Component>
)
