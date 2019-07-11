import React from 'react';
import * as UI from './ui';

export default ({model, index, ...props}) => (
    <UI.Component index={index}>
      <UI.Pack {...props}>
        <UI.Pack.Header>
          <UI.Pack.Image source={require('assets/images/categories/default.png')}/>
        </UI.Pack.Header>
        <UI.Pack.Title>{model.title}</UI.Pack.Title>
        <UI.Pack.View>367 vues</UI.Pack.View>
      </UI.Pack>
    </UI.Component>
)
