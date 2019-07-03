import React from 'react';

import connect from 'utils/connect';

import * as UI from '../ui'

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera, Permissions, Constants, KeepAwake, DangerZone } from 'expo';

const { Lottie } = DangerZone;
class RecordScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    status: 'ready',
    time: 30,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const { App, Modal } = this.props
    const { app } = this.props

    if (app.welcomeRecord !== true) {
      App.set({ welcomeRecord: true })
      Modal.open(<UI.Welcome/>)
    }

    this.setState({ hasCameraPermission: status === 'granted' });
    KeepAwake.activate();
  }

  componentWillUnmount() {
    KeepAwake.deactivate();
  }

  onNavigate = (screen, params) => e => {
    const { navigation } = this.props

    navigation.navigate(screen, params)
  }

  onSnapshot = async () => {
    if (this.camera) {
      let picture = await this.camera.takePictureAsync();
    }
  }

  render() {
    const { status, time, uri } = this.state;
    const { onSnapshot } = this;

    return (
      <UI.Screen>
      <Camera
        style={{ flex: 1, alignSelf: 'stretch' }}
        type={this.state.type}
        ref={ref => { this.camera = ref; }}
      >

        <UI.Screen.Content>
          <UI.Gradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={['transparent', '#2E3B55']}
            locations={[0,1]}
            style={{flex: 1, justifyContent: 'flex-end', alignSelf:'stretch'}}
          >
          </UI.Gradient>
        </UI.Screen.Content>

        <UI.Screen.Footer style={{backgroundColor: '#2E3B55'}}>
            <UI.ButtonRecord onPress={onSnapshot} />
        </UI.Screen.Footer>


      </Camera>
      </UI.Screen>
    );
  }
}

export default connect(
  state => ({
    app: state.app,
  }),
  (dispatch, props, models) => ({
    Modal: models.Modal,
    App: models.App,
  }),
)(RecordScreen);
