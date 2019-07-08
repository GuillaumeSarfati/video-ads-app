import React from 'react';
import { Platform, Linking, ActionSheetIOS } from 'react-native';

import connect from 'utils/connect';

import * as UI from './ui'

class OffersScreen extends React.Component {
  state = {
    current: 0
  }
  componentWillMount() {

    const { Offer } = this.props;
    const { category } = this.props.navigation.state.params;

    Offer.find({
      filter: {
        order: 'DESC',
        include: ['member', 'category'],
        where: { categoryId : category.id},
      }
    })
  }

  onPressOffer = offer =>  {
    this.props.Offer.setOne(offer)
    this.props.navigation.navigate('Offer', { offer })
  }

  onPressDetails = offer => e => {
    this.props.Offer.setOne(offer)
    this.props.navigation.navigate('Offer', { offer })
  }

  onPressOrder = offer => e => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Appeler', 'Annuler'],
      cancelButtonIndex: 1,
    },
    (buttonIndex) => {
      console.log('buttonIndex : ', buttonIndex);
      if (buttonIndex === 0) {
        Linking.openURL(Platform.OS === 'ios'
          ? `telprompt:${offer.member.phoneNumber}`
          : `tel:${offer.member.phoneNumber}`
        )
      }
    });
  }

  onNavigate = screen => e => {
    const { navigation } = this.props

    screen
      ? navigation.navigate(screen)
      : navigation.pop()
  }

  onPressNext = (index, animated = true) => e => {
    const current = index + 1
    if (this.props.offers[current]) {
      this.setState({ current })
      this.cube.scrollTo(current, animated)
    }
  }

  onSwipe = (current) => {
    if (this.state.current !== current) {
      this.setState({ current })
    }
  }

  onPress = (current) => {
      this.cube.scrollTo(current + 1, false)
      this.setState({ current: current + 1 })
  }

  onFinish = (current) => {
      this.cube.scrollTo(current + 1, true)
      this.setState({ current: current + 1 })
  }

  onLoad = (index) => {
    // TODO load data
    console.log('ON LOAD : ', index);
  }

  renderFace = (model, index) => {
    const { current } = this.state;
    return (
      <UI.Cube.Face
        onFinish={this.onFinish}
        onPress={this.onPress}
        current={current}
        index={index}
        model={model}
      />
    )
  }

  renderEnd = (model, index) => {
    return (
      <UI.Screen.Content style={{ backgroundColor: '#2E3B55' }} />
    )
  }
  render() {
    const { current } = this.state;
    const { offers } = this.props;
    const { category } = this.props.navigation.state.params;
    const { renderFace, renderEnd, onSwipe, onLoad, onNavigate, onPressNext, onPressOffer, onPressDetails, onPressOrder } = this;

    return (
      <UI.View style={{flex: 1, backgroundColor: 'green'}}>

        <UI.Cube
          ref={cube => { this.cube = cube; }}
          data={offers}
          renderFace={renderFace}
          renderEnd={renderEnd}


          onSwipe={onSwipe}
          onLoad={onLoad}
          // onGrant={this.onGrant}
          // onRelease={this.onRelease}
          // onMove={this.onMove}
        />

        <UI.Screen.Header style={{position: 'absolute', top: 0, left: 0}}>

          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back  onPress={onNavigate()}>
              {category.title}
              {/*<UI.Category light>{category.title}</UI.Category>*/}
            </UI.Screen.Header.Bar.Back>

            <UI.Screen.Header.Bar.Filters onPress={onNavigate('Search')} light>
              filters
            </UI.Screen.Header.Bar.Filters>

          </UI.Screen.Header.Bar>

          <UI.Liner />

        </UI.Screen.Header>
        {
          offers[current] && (
            <UI.Screen.Footer style={{ position: 'absolute', top: UI.Dimensions.get("window").height - 240, left: 0, height: 240 }}>


            <UI.Liner style={{marginBottom: 30}}/>
            <UI.Offer
              model={offers[current]}
              category={offers[current].category}
              member={offers[current].member}
              onPress={() => onPressOffer(offers[current])}
            />
            <UI.Liner style={{marginTop: 30}}/>

            <UI.Screen.Row style={{ justifyContent: 'space-between', alignSelf: 'stretch' }}>
              <UI.Button type="default" onPress={onPressDetails(offers[current])}>Details</UI.Button>
              <UI.Button type="primary" onPress={onPressOrder(offers[current])}>Réserver</UI.Button>
            </UI.Screen.Row>

            </UI.Screen.Footer>
          )
        }
      </UI.View>
    )
  }
}

export default connect(
  state => ({
    category: state.category,
    offers: state.offers,
  }),
  (dispatch, props, models) => ({
    Category: models.Category,
    User: models.User,
    Offer: models.Offer,
  }),
)(OffersScreen);
