import React from 'react';
import { Dimensions, WebView } from 'react-native';

import * as UI from './ui'

export default class ExternalScreen extends React.Component {
  render() {

    const { uri } = this.props.navigation.state.params;
    return (
        <WebView
        source={{ uri }}
        style={{
          marginTop: 30,
          width: Dimensions.get("window").width,
          height: Dimensions.get("window").height,
        }}
        />
   )
  }
}
