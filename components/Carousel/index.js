import React from 'react';
import { Dimensions } from 'react-native'

import * as UI from './ui';

export default class CarouselComponent extends React.Component {
  renderAdvertisement = ({ item, index }) => (
    <UI.SubComponent key={`advertisement${item.id}`}>
      <UI.Video source={{uri: item.video}}/>
      <UI.Shadow>
        <UI.Box>
          <UI.Transition shared={`advertisement${item.id}`}>
            <UI.Advertisement onPress={() => this.props.onPress(item)} {...item}/>
          </UI.Transition>
        </UI.Box>
      </UI.Shadow>
    </UI.SubComponent>
  )

  render() {
    const { advertisements } = this.props
    return (
      <UI.Component>
        <UI.Carousel
          data={advertisements}
          renderItem={this.renderAdvertisement}
          sliderWidth={Dimensions.get('window').width}
          sliderHeight={Dimensions.get('window').height}
          itemWidth={Dimensions.get('window').width - 60}
        />
      </UI.Component>
    )
  }
}
