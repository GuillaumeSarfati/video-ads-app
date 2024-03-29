import React from 'react';
import { Dimensions } from 'react-native'

import * as UI from './ui';

export default class CarouselComponent extends React.Component {
  renderOffer = ({ item, index }) => (
    <UI.SubComponent key={`offer${item.id}`}>
      <UI.Video source={{uri: item.video}}/>
      <UI.Shadow>
        <UI.Box>
          <UI.Transition shared={`offer${item.id}`}>
            <UI.Offer onPress={() => this.props.onPress(item)} model={item}/>
          </UI.Transition>
        </UI.Box>
      </UI.Shadow>
    </UI.SubComponent>
  )

  render() {
    const { offers } = this.props
    return (
      <UI.Component>
        <UI.Carousel
          data={offers}
          renderItem={this.renderOffer}
          sliderWidth={Dimensions.get('window').width}
          sliderHeight={Dimensions.get('window').height}
          itemWidth={Dimensions.get('window').width - 60}
        />
      </UI.Component>
    )
  }
}
