import React from 'react';

import connect from 'utils/connect';

import * as UI from '../ui'

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import Lottie from 'lottie-react-native'

import KeepAwake from 'expo-keep-awake';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';


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
      Modal.open(<UI.Modals.Welcome/>)
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

  onStartRecord = async () => {

    if (this.camera) {

      if (Constants.isDevice) {

        this.setState({ status: 'record' }, this.startCountdown)

        const { uri, codec = 'mp4'} = await this.camera.recordAsync({
          quality: Camera.Constants.VideoQuality['1080p'],
          maxDuration: 30,
        });
        this.onNavigate('Preview', {
          uri,
          codec,
        })()
      }
      else {
        this.onNavigate('Preview', {
          uri: 'http://192.168.0.18:3001/uploads/e1664050-6883-11e9-a6f6-5328d1ea26a6-2a122ec2-aa6b-431c-a07e-bc2e68a8c1d7.mov',
          codec: 'mp4'
        })()
      }
    }
  }

  onStopRecord = async () => {
    this.stopCountdown()

    if (this.camera) {
      this.setState({ time: 30 })
      this.camera.stopRecording()
    }
  }

  startCountdown = () => {
    this.countdown = setInterval(() => {
      if (this.state.time === 0) {
        this.onStopRecord()

      }
      else {
        this.setState({time: this.state.time - 1})
      }

    }, 1000)
  }

  stopCountdown = () => {
    if (this.countdown) {
      clearInterval(this.countdown)
    }
  }

  render() {
    const { status, time, uri } = this.state;
    const { onStartRecord, onStopRecord } = this;

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
            {
              status === 'record'
                ? <UI.StopRecord onPress={onStopRecord}>
                    <UI.Record source={require('assets/images/record/progress.png')} />
                  </UI.StopRecord>
                : <UI.ButtonRecord onPress={onStartRecord} />
            }
            {
              status === 'record'
                ? <UI.Informations>Enregistrement en cours {time}s...</UI.Informations>
                : <UI.Informations>Appuyey pour enregistrer</UI.Informations>
            }

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
