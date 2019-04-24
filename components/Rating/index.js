import React from 'react';

import * as UI from './ui';

const starFill = require('assets/images/rating/star-fill.png')
const starEmpty = require('assets/images/rating/star-empty.png')

export default Rating = ({ model }) => (
  <UI.Component.Row>
    <UI.Star source={model.stars >= 1 ? starFill : starEmpty}/>
    <UI.Star source={model.stars >= 2 ? starFill : starEmpty}/>
    <UI.Star source={model.stars >= 3 ? starFill : starEmpty}/>
    <UI.Star source={model.stars >= 4 ? starFill : starEmpty}/>
    <UI.Star source={model.stars >= 5 ? starFill : starEmpty}/>
  </UI.Component.Row>
)
