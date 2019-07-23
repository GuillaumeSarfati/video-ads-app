import React from 'react';
import { Dimensions } from 'react-native';
import * as UI from './ui';

const pictures = {
  visa: require('assets/images/payment/visa.png'),
  mastercard: require('assets/images/payment/mastercard.png'),
  westernunion: require('assets/images/payment/westernunion.png'),
}
export default class CreditCard extends React.Component {
  renderEmpty = props =>  (
    <UI.Component.Row style={[
      props.small
        ? {width: 300, height: 40}
        : {width: 300, height: 180},
      {
        justifyContent: 'center',
        alignItems: 'center',
      }
    ]}>
      <UI.Component.Text style={{color: 'grey'}}> Ajouter une caret de credit </UI.Component.Text>
    </UI.Component.Row>
  )

  renderBig = props =>  (
    <UI.Component.Column style={{alignItems: 'center', justifyContent: 'center'}}>
    <UI.Component.Image style={{
        width: Dimensions.get("window").width - 60,
        height: (Dimensions.get("window").width - 60) * 0.64937,
        padding: 15,
      }}
      source={require('assets/images/payment/card.png')}
    />
    {this.renderSmall(props)}
    </UI.Component.Column>
  )

  renderSmall = props => (
    <UI.Component.Row style={[
      props.small
        ? {width: 300, height: 40}
        : {width: 300, height: 180},
      {
        justifyContent: 'space-between',
        alignItems: 'center',
      }
    ]}>
      <UI.Component.Image style={{width: 30, height: 15}} source={pictures[props.model.cardType.toLowerCase()]}/>
      <UI.Component.Text style={{color: 'grey'}}> **** **** **** {props.model.cardNumber} </UI.Component.Text>
      <UI.Component.Text style={{color: 'grey'}}> {props.model.expiryMonth}/{props.model.expiryYear} </UI.Component.Text>
    </UI.Component.Row>
  )
  render() {
    const { model, small, onPress } = this.props;
    const { renderEmpty, renderBig, renderSmall } = this;

    let Component = renderEmpty(this.props)
    if (model && small) Component = renderSmall(this.props)
    if (model && !small) Component = renderBig(this.props)
    return (
        <UI.Component.TouchableOpacity onPress={onPress} disable={!onPress}>
            {Component}
        </UI.Component.TouchableOpacity>
    )

  }
}
