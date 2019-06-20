import React from 'react';
import * as UI from './ui';

export default class Price extends React.Component {
  state = {
    price: 20,
  }

  onPriceChange = values => {
    const price = values[0];

    if (price !== this.state.price) {
      this.setState({price: values[0]})
    }
  }


  render() {
    const { onPriceChange } = this;
    const { onChange } = this.props;
    const { price } = this.state;


    return (
      <UI.Screen.Column style={{paddingHorizontal: 30}}>
      <UI.Screen.Row style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
        <UI.Screen.Label dark>PRIX</UI.Screen.Label>
        <UI.TextGradient>{price ? price + '€' : 'Gratuit' } - 500€ /heure </UI.TextGradient>
      </UI.Screen.Row>
      <UI.Screen.Row style={{justifyContent: 'center'}}>
        <UI.Slider
          min={0}
          max={500}
          sliderLength={414 - 60}
          values={[price]}
          onValuesChange={onPriceChange}
          onValuesChangeFinish={values => onChange(values[0])}
        />
      </UI.Screen.Row>
      <UI.Screen.Liner dark/>
      </UI.Screen.Column>
    )
  }
}
