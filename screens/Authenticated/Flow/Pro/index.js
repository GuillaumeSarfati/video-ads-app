import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ProScreen extends React.Component {
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onPress = () => {
    const { navigation } = this.props

    navigation.navigate('Authenticated')
  }

  render() {
    const { offers } = this.props;
    const { onPress } = this;

    return (
      <UI.Screen scroll>

        <UI.Screen.Header background>
          <UI.Screen.Column style={{paddingVertical: 30}}>
            <UI.Screen.Title style={{paddingBottom: 30}}>Pop Annonces</UI.Screen.Title>
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
              <UI.Record/>
            </UI.Screen.Column>
          )
        }

      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    offers: state.offers,
  }),
  (dispatch, props, models) => ({}),
)(ProScreen);
