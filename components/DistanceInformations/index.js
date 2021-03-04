import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui';

class DistanceInformations extends React.Component {
  state = {
    distance: 0
  }

  componentWillMount = async () => {
    const distance = await this.distance()
    this.setState({ distance });
  }

  distance = async () => {
    console.log('this.props.model.geoloc : ', this.props.model.geoloc);
    console.log('this.props.me.geoloc : ', this.props.me.geoloc);
    try {
      const lat1 = this.props.me.geoloc.lat;
      const lon1 = this.props.me.geoloc.lng;
      const lat2 = this.props.model.geoloc.lat;
      const lon2 = this.props.model.geoloc.lng;

      const R = 6371; // Radius of the earth in km
      const dLat = (lat2-lat1).toRad();  // Javascript functions in radians
      const dLon = (lon2-lon1).toRad();
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
      Math.sin(dLon/2) * Math.sin(dLon/2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const d = R * c; // Distance in km
      return (d < 10
        ? d.toFixed(1)
        : d.toFixed(0)
      ) + 'km'
    } catch (e) {
      console.log('----------------------');
      console.log('ERROR : ', e);
      console.log('----------------------');
      return 'distance...'
    }
  }

  render() {
    const { distance } = this.state;
    return (
      <UI.Component.Text>{distance}</UI.Component.Text>
    )
  }
}

export default connect(
  state => ({
    me: state.me,
  })
)(DistanceInformations)
