import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ProScreen extends React.Component {

  state = {
    tab: 'active',
  }

  componentWillMount = async () => {
    const { Offer, me } = this.props;
    Offer.find({
      filter: {
        where: {
          memberId: me.id,
        },
        include: [
          {
            relation: 'category',
            scope: { include: 'subCategories' },
          },
          'subCategory',
          'member',
        ]
      }
    })
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
    const { offers } = this.props;
    const { onNavigate, onPressOffer } = this;

    return (
      <UI.Screen scroll>
        <UI.Screen.Header background>
          <UI.Component.Available/>
          <UI.Screen.Column style={{paddingVertical: 30}}>
            <UI.Screen.Header.Title style={{paddingBottom: 30}}>Pop Annonces</UI.Screen.Header.Title>
          </UI.Screen.Column>
        </UI.Screen.Header>

        <UI.Screen.Row style={{alignItems: 'center', paddingHorizontal: 15}}>
          <UI.Tab onPress={() => this.setState({tab: 'active'})}>
            <UI.Tab.Title selected={this.state.tab === 'active'}>Actives</UI.Tab.Title>
          </UI.Tab>
          <UI.Tab onPress={() => this.setState({tab: 'inactive'})}>
            <UI.Tab.Title selected={this.state.tab === 'inactive'}>Inactives</UI.Tab.Title>
          </UI.Tab>
        </UI.Screen.Row>
        {
          this.state.tab === 'active' && (
            <UI.Screen.Column style={{alignItems: 'center', paddingVertical: 30}}>
              <UI.Record onPress={onNavigate('Record')}/>
            </UI.Screen.Column>
          )
        }
        {
          this.state.tab === 'inactive' && (
            <UI.Screen.Column style={{paddingLeft: 15, paddingTop: 30}}>
              <UI.Component.Offers
                models={offers}
                onPress={onPressOffer}
              />
            </UI.Screen.Column>
          )
        }
      </UI.Screen>
    )
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
