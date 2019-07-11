import React from 'react'
import { Video } from 'expo';
import { Dimensions } from 'react-native';

import * as UI from './ui';

export default class VideoComponent extends React.Component {
  render() {
    const { model, controls, large } = this.props
    return (
      <UI.Video large={large}>
        <UI.Component.Row style={{position: 'absolute', top: 10, right: 10 }}>

          {
            controls && controls.share && (
              <UI.Component.TouchableOpacity style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(125, 125, 125, 0.1)', width: 40, height: 40, borderRadius: 20, margin: 5}}>
                <UI.Component.Icon name="ios-share-alt" size={22} color="white" />
              </UI.Component.TouchableOpacity>
            )
          }

          {
            controls && controls.favorite && (
              <UI.Component.TouchableOpacity style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(125, 125, 125, 0.1)', width: 40, height: 40, borderRadius: 20, margin: 5}}>
                <UI.Component.Icon name="ios-heart-empty" size={22} color="white" />
              </UI.Component.TouchableOpacity>
            )
          }

          {
            controls && controls.sound && (
              <UI.Component.TouchableOpacity style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(125, 125, 125, 0.1)', width: 40, height: 40, borderRadius: 20, margin: 5}}>
                <UI.Component.Icon name="ios-volume-off" size={22} color="white" />
              </UI.Component.TouchableOpacity>
            )
          }

        </UI.Component.Row>
        {
          model && model.video &&  (
            <Video
              source={{ uri: model.video }}
              rate={1.0}
              volume={1.0}
              isMuted={false}
              resizeMode="cover"
              shouldPlay
              isLooping
              style={{
                width: large
                  ? (Dimensions.get('window').width - 60)
                  : (Dimensions.get('window').width - 45) / 2,
                height: large
                  ? (Dimensions.get('window').width - 60)
                  : (Dimensions.get('window').width - 45) / 2,
              }}
            />
          )
        }
        <UI.Component.TouchableOpacity style={{position: 'absolute', justifyContent: 'center', alignItems:'center', width: 40, height: 40, borderRadius: 20, margin: 5}}>
          <UI.Component.Icon name="ios-play" size={32} color="white" />
        </UI.Component.TouchableOpacity>
      </UI.Video>
    )
  }

}
