import React from 'react'
import { Video } from 'expo';
import { Dimensions, Share } from 'react-native';

import connect from 'utils/connect';

import * as UI from './ui';


class VideoComponent extends React.Component {
  state = {
    isMuted: this.props.isMuted || false,
    status: null,
    favorite: this.props.model.favorite,
  }

  onPressSound = model => e => {
    this.setState({ isMuted: !this.state.isMuted })
  }

  onPressFavorite = offer => async e => {
    const { Favorite, me } = this.props;
    console.log('FAVORITE : ', this.state.favorite);
    if (!this.state.favorite) {
      console.log('create');
      console.log('create');
      const favorite = await Favorite.create({
        memberId: me.id,
        offerId: offer.id,
      });
      this.setState({favorite: favorite})
    } else {
      console.log('delete');
      await Favorite.deleteById(this.state.favorite.id);
      this.setState({favorite: false})
    }

  }

  onPressShare = model => e => {
    Share.share({
      title: 'Pop Eye',
      message: model.description,
      url: 'http://pop-eye.fr/annonce/' + model.id
    });
  }

  getRef = ref => {
    console.log('REF : ', ref)
  }

  onPlaybackStatusUpdate = status => {
    if (this.state.status === null || status.isPlaying !== this.state.status.isPlaying) {
      this.setState({ status })
    }
  }

  dimensions = () => {
    if (this.props.large) {
      return UI.dimensions.large
    }
    if (this.props.fullscreen) {
      return UI.dimensions.fullscreen
    }
    return UI.dimensions.default
  }

  render() {
    const { dimensions, getRef, onPlaybackStatusUpdate, onPressFavorite, onPressSound, onPressShare } = this;
    const { model, controls, large, style, shouldPlay } = this.props
    return (
      <UI.Video style={[dimensions(), style]}>

        {
          model && model.video &&  (
            <Video
              // source={{ uri: model.video }}
              ref={getRef}
              source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
              rate={1.0}
              volume={1.0}
              isMuted={this.state.isMuted}
              resizeMode="cover"
              shouldPlay={shouldPlay}
              isLooping
              onPlaybackStatusUpdate={onPlaybackStatusUpdate}
              style={dimensions()}
            />
          )
        }

        <UI.Component.Row style={{position: 'absolute', top: 10, right: 10 }}>

          {
            controls && controls.share && (
              <UI.Component.TouchableOpacity onPress={onPressShare(model)} style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(125, 125, 125, 0.25)', width: 40, height: 40, borderRadius: 20, margin: 5}}>
                <UI.Component.Icon name="ios-share-alt" size={22} color="white" />
              </UI.Component.TouchableOpacity>
            )
          }

          {
            controls && controls.favorite && (
              <UI.Component.TouchableOpacity onPress={onPressFavorite(model)} style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(125, 125, 125, 0.25)', width: 40, height: 40, borderRadius: 20, margin: 5}}>
                <UI.Component.Icon name={this.state.favorite
                  ? "ios-heart"
                  : "ios-heart-empty"} size={22} color="white" />
              </UI.Component.TouchableOpacity>
            )
          }

          {
            controls && controls.sound && (
              <UI.Component.TouchableOpacity onPress={onPressSound(model)} style={{justifyContent: 'center', alignItems:'center', backgroundColor: 'rgba(125, 125, 125, 0.25)', width: 40, height: 40, borderRadius: 20, margin: 5}}>
                <UI.Component.Icon
                  name={this.state.isMuted
                    ? "ios-volume-off"
                    : "ios-volume-high"
                  }
                  color="white"
                  size={22}
                  />
              </UI.Component.TouchableOpacity>
            )
          }

        </UI.Component.Row>

            {/*<UI.Component.TouchableOpacity style={{
              position: 'absolute',
              justifyContent: 'center',
              alignItems:'center',
              borderRadius: 20,
              margin: 5,
              ...dimensions()
            }}>
              {
                !this.state.status || !this.state.status.isPlaying && (
                  <UI.Component.Icon name="ios-play" size={32} color="white" />
                )
              }
            </UI.Component.TouchableOpacity>
*/}
      </UI.Video>
    )
  }

}

export default connect(
  state => ({
    me: state.me,
  }),
  (dispatch, props, models) => ({
    Favorite: models.Favorite,
    Modal: models.Modal,
  })
)(VideoComponent)
