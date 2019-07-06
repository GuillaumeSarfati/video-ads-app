import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ProScreen extends React.Component {
  componentWillMount = async () => {
    const { Offer, me } = this.props;
    Offer.find({
      filter: {
        where: {
          memberId: me.id,
        }
      }
    })
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { offers } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Screen scroll>
        <UI.Screen.Header background>
          <UI.Component.Available/>
          <UI.Screen.Column style={{paddingVertical: 30}}>
            <UI.Screen.Header.Title style={{paddingBottom: 30}}>Pop Annonces</UI.Screen.Header.Title>
          </UI.Screen.Column>
        </UI.Screen.Header>

        {
          offers.length
          ? (
            <UI.Screen.Column style={{padding: 15}}>
              <UI.Screen.Description>Zapping Pop Annonces</UI.Screen.Description>
              <UI.Offers>
              {
                offers.map(offer => (
                  <UI.Video/>
                ))
              }
              </UI.Offers>
            </UI.Screen.Column>
          )
          : (
            <UI.Screen.Column style={{alignItems: 'center', paddingVertical: 30}}>
              <UI.Record onPress={onNavigate('Record')}/>
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
