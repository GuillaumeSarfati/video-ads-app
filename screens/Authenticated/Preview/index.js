import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

import { Text, View, TouchableOpacity, Alert } from 'react-native';
import { Video } from 'expo';
import { For } from 'react-loops';

class ProfileScreen extends React.Component {

  componentDidMount() {
    const { Category } = this.props;
    const { categories } = this.props;

    if (!categories.length) Category.find()
  }
  uploadVideo = async (uri, codec) => {
    const type = `video/${codec}`;
     const data = new FormData();
     data.append("video", {
       name: "video",
       type,
       uri
     });

     const response = await fetch('https://pop-eye-api-upload.herokuapp.com/video', {
       method: "post",
       body: data
     });

     const body = JSON.parse(response._bodyInit)
     return body.bucket + '/' + body.key

  }
  onSend = (uri, codec) => async () => {
    const { me, categories } = this.props
    const { Offer } = this.props;

    const category = categories[0]
    const video = await this.uploadVideo(uri, codec)

    await Offer.create({
      title: 'test',
      description: 'description',
      geoloc: { lat: 0, lng: 0 },
      geolocDistance: 5000,
      price: 30,
      memberId: me.id,
      categoryId: category.id,
      video,
    })
  }

  render() {
    console.log('PROFILE render : ', this.props.navigation);
    const { onSend } = this;
    const { categories} = this.props;
    const { uri, codec } = this.props.navigation.state.params

    return (
      <UI.Screen.Content style={{justifyContent: 'flex-start'}}>
        <Video
          style={{width: 414, height: 734}}
          source={{uri}}
          isLooping
          shouldPlay
        />
        <UI.Screen style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}>

          <UI.Screen.Header>
            <UI.Screen.Header.Bar>
              <UI.Screen.Header.Bar.Back dark>
                Back
              </UI.Screen.Header.Bar.Back>
              <UI.Screen.Liner/>
            </UI.Screen.Header.Bar>
          </UI.Screen.Header>

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
          <UI.Screen.Footer style={{ backgroundColor: '#2E3B55' }}>
            <UI.Button type="primary" onPress={onSend(uri, codec)} large>Envoyer</UI.Button>
            <UI.Informations>Après votre envoi il faudra quelques heures avant que votre Pop Ads soit visible</UI.Informations>
          </UI.Screen.Footer>
        </UI.Screen>
      </UI.Screen.Content>
    );
  }
}

export default connect(
  state => ({
    me: state.me,
    categories: state.categories,
  }),
  (dispatch, props, models) => ({
    Category: models.Category,
    Offer: models.Offer,
  }),
)(ProfileScreen);