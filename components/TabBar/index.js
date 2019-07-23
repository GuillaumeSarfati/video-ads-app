import React from 'react';
import { LayoutAnimation } from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

import Constants from 'expo-constants';
import * as Location from 'expo-location';
import {Permissions} from 'expo'

import connect from 'utils/connect';

import * as UI from './ui'

class TabBarComponent extends React.Component {

  state = {
    location: null,

    titles: {
      'FlowConsumer': 'Home',
      'FlowSupplier': 'Home',
      'Shop': 'Boutique',
    },
    tabs: {
      consumer: [
        'FlowConsumer',
        'Favorites',
        'Shop',
        'Profile',
      ],
      supplier: [
        'FlowSupplier',
        'RecordVideo',
        'Shop',
        'Profile',
      ],
    },
    current: this.props.me && this.props.me.mode === 'consumer'
      ? 'FlowConsumer'
      : 'FlowSupplier',
  }

  shouldComponentUpdate(nextProps) {
    return !!nextProps.me
  }

  onNavigate = current => e => {
    const { navigation } = this.props

    LayoutAnimation.configureNext({
      duration: 300,
      create: {
        type: LayoutAnimation.Types.linear,
        property: LayoutAnimation.Properties.opacity,
      },
      update: {
        type: LayoutAnimation.Types.linear,
      },
    });

    this.setState({ current }, () => navigation.navigate(current))
  }

  componentWillMount() {
    this.getLocationAsync();
  }

  getLocationAsync = async () => {
    const { Member, me } = this.props;
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    if (!me.geoloc ||  location.coords.latitude !== me.geoloc.latitude) {
      Member.patchAttributesById(me.id, {
        geoloc: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        }
      })
    }

  };

  render() {
    const { tabs, titles, current } = this.state;
    const { me } = this.props;
    const { onNavigate } = this;

    return (
      <UI.Component>
        {
          tabs[me.mode].map(tab => (
            <UI.ButtonTest
              key={tab}
              current={current === tab}
              onPress={onNavigate(tab)}
            >
              { titles[tab] || tab }
            </UI.ButtonTest>
          ))
        }
        <UI.TouchableOpacity onPress={onNavigate('Profile')}>
          <UI.Gradient style={{padding: 5, borderRadius: 100}}>
            <UI.Avatar source={{ uri: me.picture }} />
          </UI.Gradient>
        </UI.TouchableOpacity>
      </UI.Component>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({
    Member: models.member,
  }),
)(TabBarComponent);
