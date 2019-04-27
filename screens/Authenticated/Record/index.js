import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Camera, Permissions, Video } from 'expo';

class RecordScreen extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
    status: 'ready',
    time: 30,
  };
  componentWillMount() {
    fetch('http://172.20.10.3:3001')
  }
  async componentDidMount() {
    console.log('Camera.Constants : ', Camera.Constants);
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onStartRecord = async () => {
    if (this.camera) {

      this.setState({status: 'record'})
      this.countdown = setInterval(() => {
        if (this.state.time === 0) {
          this.onStopRecord()

        }
        else {
          this.setState({time: this.state.time - 1})
        }

      }, 1000)
      let {uri, codec = 'mp4'} = await this.camera.recordAsync({
        quality: Camera.Constants.VideoQuality['1080p'],
        maxDuration: 30,
      });
      const type = `video/${codec}`;
      const data = new FormData();
      data.append("video", {
        name: "video",
        type,
        uri
      });

      try {
        this.setState({ status: 'uploading', uri})
        const response = await fetch('http://172.20.10.3:3001/video', {
          method: "post",
          body: data
        });
        // await Alert.alert(JSON.parse(response._bodyInit).path)
        uri = 'http://172.20.10.3:3001/' + JSON.parse(response._bodyInit).path
        // await Alert.alert(uri)
        this.setState({ status: 'uploaded', uri})
        // Alert.alert(JSON.stringify(response))
      } catch (e) {
        this.setState({ status: 'error'})
        Alert.alert(JSON.stringify(e))
      }
    }
  }

  onStopRecord = async () => {
    if (this.countdown) {
      clearInterval(this.countdown)
    }
    if (this.camera) {
      this.setState({ time: 30 })
      this.camera.stopRecording()
    }
  }
  render() {
    const { status, time, uri } = this.state;
    const { onStartRecord, onStopRecord } = this;

    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1, backgroundColor: 'red' }}>
          <Camera
            style={{ flex: 1, borderColor: 'red', borderWidth: 3 }}
            type={this.state.type}
            ref={ref => { this.camera = ref; }}
          >

            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {
                status === 'record'
                ? <UI.StopRecord onPress={onStopRecord}><Text>{status} {time}</Text></UI.StopRecord>
                : <UI.StartRecord onPress={onStartRecord}><Text>{status} {time}</Text></UI.StartRecord>
              }
              {
                status === 'uploading' && (
                  <Video
                    style={{width: 300, height: 300}}
                    source={{uri}}
                    isLooping
                    shouldPlay
                  />
                )
              }
              {
                status === 'uploaded' && (
                  <Video
                    style={{width: 300, height: 300}}
                    source={{uri}}
                    isLooping
                    shouldPlay
                  />
                )
              }
              {/*<TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>*/}
            </View>
          </Camera>
        </View>
      );
    }
  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(RecordScreen);
