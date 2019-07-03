import React from 'react';
import * as UI from './ui';

const uri = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';

export default props => (
    <UI.Component>
      <UI.Category {...props}>
        {/*<UI.Video style={{width: 100, height: 100}} source={{ uri }}/>*/}
        <UI.Category.Header>
          <UI.Category.Image source={require('assets/images/play.png')}/>
        </UI.Category.Header>
        <UI.Category.Title>Zapping</UI.Category.Title>
        <UI.Category.View>367 news</UI.Category.View>
      </UI.Category>
    </UI.Component>
)
