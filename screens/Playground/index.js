import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class OptionsScreen extends React.Component {

  componentWillMount() {
    const { Offer } = this.props

    Offer.findOne()
  }
  onNavigate = screen => e => {
    const { navigation } = this.props

    navigation.navigate(screen)
  }

  render() {
    const { onNavigate } = this;
    const { offer } = this.props;

    return (
      <UI.Screen scroll>

      <UI.Screen.Header>
        <UI.Screen.Header.Bar>
          <UI.Screen.Header.Bar.Back onPress={onNavigate('FlowConsumer')}>
            Application
          </UI.Screen.Header.Bar.Back>

        </UI.Screen.Header.Bar>
        <UI.Screen.Header.Title dark>Playground</UI.Screen.Header.Title>
      </UI.Screen.Header>

        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Screen.Column style={{padding: 30}}>
            <UI.Component.Video
              model={offer}
              controls={{
                favorite: true
              }}
              large
            />
          </UI.Screen.Column>
        </UI.Screen.Content>


      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    offer: state.offer,
  }),
  (dispatch, props, models) => ({
    Offer: models.offer,
  }),
)(OptionsScreen);
