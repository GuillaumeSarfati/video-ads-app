import React from 'react';

import connect from 'utils/connect';

import { NavigationActions } from 'react-navigation';

import * as UI from './ui'

class HomeScreen extends React.Component {
  onPressAdvertisement = advertisement => {
    this.props.navigation.navigate('Advertisement', { advertisement })
  }

  componentWillMount = async () => {
    const { Advertisement } = this.props;
    Advertisement.find()
  }

  render() {
    const { advertisements } = this.props;

    return (
      <UI.Screen>
        <UI.Carousel
          advertisements={advertisements}
          onPress={this.onPressAdvertisement}
        />
      </UI.Screen>
    )
  }
}

export default connect(
  state => ({
    users: state.users,
    advertisements: state.advertisements,
  }),
  (dispatch, props, models) => ({
    User: models.User,
    Advertisement: models.Advertisement,
  }),
)(HomeScreen);
