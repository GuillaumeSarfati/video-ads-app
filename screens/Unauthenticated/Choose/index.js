import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class ChooseScreen extends React.Component {
  componentWillMount = async () => {
    const { Model } = this.props;
  }

  onChoose = mode => async e => {
    const { Member, navigation, me } = this.props

    await Member.update({ mode })

    navigation.navigate(mode === 'consumer'
      // TODO Authenticated Consumer
      ? 'Authenticated'
      // TODO Authenticated Supplier
      : 'Authenticated'
    )
  }

  render() {
    const { me } = this.props;
    const { onChoose } = this;

    return (
      <UI.Screen>
        <UI.Screen.Content style={{ justifyContent: 'center', alignItems: 'center' }}>
          <UI.Image source={require('assets/images/illustration.png')}/>
          <UI.Title dark>Bienvenue {me.firstname} </UI.Title>
          <UI.Description center>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</UI.Description>
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Button onPress={onChoose('consumer')}>Consumer</UI.Button>
          <UI.Button onPress={onChoose('supplier')}>Supplier</UI.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({
    Member: models.Member,
  }),
)(ChooseScreen);
