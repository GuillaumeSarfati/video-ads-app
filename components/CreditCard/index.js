import React from 'react';

import * as UI from './ui';

export default CreditCard = ({ model, onPress, small }) => (
  <UI.Component.TouchableOpacity onPress={onPress} disable={!onPress}>
    <UI.Component.Gradient style={[
      small
        ? {width: 300, height: 40}
        : {width: 300, height: 180},
      { padding: 5, borderRadius: 8 }
    ]}>
      {
        model
        ? (
          <UI.Component.Row style={{ flex: 1, borderRadius: 7, alignItems: 'center'}}>
            <UI.Component.Text style={{color: 'white'}}> {model.cardType} </UI.Component.Text>
            <UI.Component.Text style={{color: 'white'}}> {model.cardNumber} </UI.Component.Text>
            <UI.Component.Text style={{color: 'white'}}> {model.expiryMonth}/{model.expiryYear} </UI.Component.Text>
          </UI.Component.Row>
        )
        : (
          <UI.Component.Row style={{ flex: 1, borderRadius: 7, alignItems: 'center' }}>
            <UI.Component.Text style={{color: 'white'}}>Ajouter une carte de credit</UI.Component.Text>
          </UI.Component.Row>
        )
      }
    </UI.Component.Gradient>
  </UI.Component.TouchableOpacity>
)
