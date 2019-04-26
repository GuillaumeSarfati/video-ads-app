import React from 'react';
import MultiSlider from 'react-native-multi-slider';

import * as UI from './ui'

export default class SliderComponent extends React.Component {
  onValuesChangeStart = () => console.log('onValuesChangeStart')
  onValuesChangeFinish = () => console.log('onValuesChangeFinish')
  onValuesChange = () => console.log('onValuesChange')
  render() {
    const { props } = this
    const { onValuesChangeStart, onValuesChangeFinish } = this
    return (
      <MultiSlider
          {...props}
          selectedStyle={{
            backgroundColor: '#25B0E3'
          }}
          customMarker={UI.Marker}
          onValuesChangeStart={this.onValuesChangeStart}
          onValuesChange={this.onValuesChange}
          onValuesChangeFinish={this.onValuesChangeFinish}
      />
    )
  }
}
