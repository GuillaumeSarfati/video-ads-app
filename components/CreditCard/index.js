import React from 'react';

import * as UI from './ui';

export default CreditCard = ({ model }) => (
  <UI.Component.Row>
    <UI.Component.Text> {model.cardType} </UI.Component.Text>
    <UI.Component.Text> {model.cardNumber} </UI.Component.Text>
    <UI.Component.Text> {model.expiryMonth}/{model.expiryYear} </UI.Component.Text>
  </UI.Component.Row>
)
