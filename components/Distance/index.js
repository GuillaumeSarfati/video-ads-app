import React from 'react';
import PropTypes from 'prop-types';

import * as UI from './ui';

export default class Distance extends React.Component {

  // static propTypes = {
  //     geoloc: PropTypes.shape({
  //       latitude: PropTypes.number,
  //       longitude: PropTypes.number,
  //       latitudeDelta: PropTypes.number,
  //       longitudeDelta: PropTypes.number,
  //     }),
  //     distance: PropTypes.arrayOf(PropTypes.number)
  // }
  //
  // static defaultProps = {
  //   geoloc: {
  //     latitude: 37.78825,
  //     longitude: -122.4324,
  //     latitudeDelta: 0.0922,
  //     longitudeDelta: 0.0421,
  //   },
  //   distance: [0],
  // }

  state = {
    geoloc: {
      latitude: this.props.geoloc.lat,
      longitude: this.props.geoloc.lng,
    },
    distance: this.props.distance,
  }

  onDistanceChange = values => {
    const distance = values[0];

    if (distance !== this.state.distance) {
      this.setState({distance: values[0]})
    }
  }

  onGeolocChange = (geoloc) => {
    const { onChangeGeoloc } = this.props;
    this.setState({ geoloc }, onChangeGeoloc({
      ...geoloc,
      lat: geoloc.latitude,
      lng: geoloc.longitude,
    }));
  }

  render() {
    const { onGeolocChange, onDistanceChange } = this;
    const { onChangeDistance } = this.props;
    const { geoloc, distance } = this.state;

    return (
      <UI.Screen.Column style={{paddingHorizontal: 30}}>
      <UI.MapView
        style={{ width: 414 - 60, height: 414 - 60, borderRadius: 8 , marginBottom: 15}}
        initialRegion={geoloc}
        onRegionChange={onGeolocChange}
      >
        {
          this.state.distance
          ? (
            <UI.MapView.Circle
              center={geoloc}
              strokeWidth={5}
              strokeColor="rgba(47, 137, 248, 1)"
              fillColor="rgba(47, 137, 248, 0.5)"
              radius={distance * 1000}
            />
          )
          : (
            <UI.MapView.Marker coordinate={geoloc} />
          )
        }

      </UI.MapView>
      <UI.Screen.Row style={{alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
        <UI.Screen.Label dark>DISTANCE</UI.Screen.Label>
         <UI.TextGradient>{distance ? distance + 'km' : 'Ici' } - 25km </UI.TextGradient>
      </UI.Screen.Row>
      <UI.Screen.Row style={{justifyContent: 'center'}}>
        <UI.Slider
          min={0}
          max={25}
          sliderLength={414 - 60}
          values={[distance]}
          onValuesChange={onDistanceChange}
          onValuesChangeFinish={values => onChangeDistance(values[0])}
        />
      </UI.Screen.Row>
      <UI.Screen.Liner dark/>
      </UI.Screen.Column>
    )
  }
}
