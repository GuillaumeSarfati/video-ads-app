import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ProScreen extends React.Component {

  state = {
    tab: 'online',
  }

  findMyOffers() {
    const { Offer, me } = this.props;

    return Offer.find({
      filter: {
        where: {
          memberId: me.id,
        },
        include: [
          'subCategory',
          {relation: 'category', scope: { include: 'subCategories' }},
          'member',
        ]
      }
    })
  }
  componentWillMount() {
    this.findMyOffers()
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.me && nextProps.me && this.props.me.available !== nextProps.me.available) {
      this.findMyOffers()
    }
  }

  onNavigate = screen => e => {
    const { navigation } = this.props
    navigation.navigate(screen)
  }

  onPressOffer = offer => {
    const { Offer, navigation } = this.props
    Offer.setOne(offer)
    navigation.navigate('Create', { offer })
  }

  render() {
    const { offers, me } = this.props;
    const { onNavigate, onPressOffer } = this;

    console.log('offers : ', offers);
    return me ? (
      <UI.Screen scroll>
        <UI.Screen.Header background>
          <UI.Component.Available/>
          <UI.Screen.Column style={{paddingVertical: 30}}>
            <UI.Screen.Header.Title style={{paddingBottom: 30}} light>Pop Annonces</UI.Screen.Header.Title>
          </UI.Screen.Column>
        </UI.Screen.Header>

        <UI.Screen.Row style={{alignItems: 'center', paddingHorizontal: 15}}>
          <UI.Tab onPress={() => this.setState({tab: 'online'})}>
            <UI.Tab.Title selected={this.state.tab === 'online'}>Actives</UI.Tab.Title>
          </UI.Tab>
          <UI.Tab onPress={() => this.setState({tab: 'other'})}>
            <UI.Tab.Title selected={this.state.tab === 'other'}>Inactives</UI.Tab.Title>
          </UI.Tab>
        </UI.Screen.Row>
        {
          this.state.tab === 'online'
          ? offers.filter(offer => offer.status === 'online').length
            ? (
              <UI.Screen.Column style={{paddingLeft: 15, paddingTop: 30}}>
                <UI.Component.Offers
                  models={offers.filter(offer => offer.status === 'online')}
                  onPress={onPressOffer}
                />
              </UI.Screen.Column>
            )
            : (
              <UI.Screen.Column style={{alignItems: 'center', paddingVertical: 30}}>
                <UI.Record onPress={onNavigate('RecordVideo')}/>
              </UI.Screen.Column>
            )
          : null
        }
        {
          this.state.tab === 'other' && (
            <UI.Screen.Column style={{paddingLeft: 15, paddingTop: 30}}>
              <UI.Component.Offers
                models={offers.filter(offer => offer.status !== 'online')}
                onPress={onPressOffer}
              />
            </UI.Screen.Column>
          )
        }
      </UI.Screen>
    ): null
  }
}

export default connect(
  state => ({
    me: state.me,
    offers: state.offers,
  }),
  (dispatch, props, models) => ({
    Offer: models.Offer,
  }),
)(ProScreen);
