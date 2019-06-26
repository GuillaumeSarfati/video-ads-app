import React from 'react';
import * as UI from './ui';

export default class Price extends React.Component {
  state = {
    price: this.props.values,
  }

  onPriceChange = values => {
    this.setState({price: values})
  }


  render() {
    const { onPriceChange } = this;
    const { onChange } = this.props;
    const { price } = this.state;


    return (
      <UI.Screen.Column style={{paddingHorizontal: 30}}>
      <UI.Screen.Row style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
        <UI.Screen.Label dark>PRIX</UI.Screen.Label>
        <UI.TextGradient>{price[0] ? price[0] + '€' : 'Gratuit' } - { price[1] ? price[1] : '500'}€ /heure </UI.TextGradient>
      </UI.Screen.Row>
      <UI.Screen.Row style={{justifyContent: 'center'}}>
        <UI.Slider
          min={0}
          max={500}
          step={5}
          sliderLength={414 - 60}
          values={price}
          onValuesChange={onPriceChange}
          onValuesChangeFinish={onChange}
        />
      </UI.Screen.Row>
      <UI.Screen.Liner dark/>
      </UI.Screen.Column>
    )
  }
}
