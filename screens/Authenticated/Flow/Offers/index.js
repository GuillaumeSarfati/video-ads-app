import React from 'react';
import { Platform, Linking, ActionSheetIOS } from 'react-native';

import connect from 'utils/connect';

import * as UI from './ui'

class OffersScreen extends React.Component {
  state = {
    mode: 'list',
    current: 0
  }

  // componentWillMount() {
  //   const { Offer } = this.props;
  //   const { id } = this.props.navigation.state.params;
  //
  //   if (id) {
  //     Offer.find({
  //       filter: {
  //         order: 'DESC',
  //         include: ['member', 'category', 'subCategory'],
  //         where: { categoryId : id},
  //       }
  //     })
  //   }
  //   else {
  //     Offer.find({
  //       filter: {
  //         order: 'DESC',
  //         include: ['member', 'category', 'subCategory'],
  //       }
  //     })
  //   }
  // }

  onPressOffer = offer =>  {
    this.props.Offer.setOne(offer)
    this.props.navigation.navigate('Offer', { offer })
  }

  onPressDetails = offer => e => {
    console.log('OFFER : ', offer);
    this.props.Offer.setOne(offer)
    this.props.navigation.navigate('Offer', { offer })
  }

  onPressOrder = offer => e => {
    ActionSheetIOS.showActionSheetWithOptions({
      options: ['Appeler', 'Annuler'],
      cancelButtonIndex: 1,
    },
    (buttonIndex) => {
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
  }

  onToggleMode = mode => this.setState({ mode })

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
    const { onNavigate, onToggleMode } = this;
    const { title } = this.props.navigation.state.params;
    return (
      <UI.Screen.Column style={{ flex: 1, paddingHorizontal: 15, backgroundColor: 'white' }}>


        <UI.Screen.Column style={{flex: 1, justifyContent:'center'}}>
          <UI.Screen.Title dark>Vous n'avez pas trouvé ?</UI.Screen.Title>
          <UI.Screen.Description style={{padding: 15}}>Publier une demande</UI.Screen.Description>
        </UI.Screen.Column>

        <UI.Screen.Footer style={{justifyContent:'center', alignItems: 'center'}}>
          <UI.Component.Button onPress={onNavigate('RecordVideo')}>Créer une demande</UI.Component.Button>
        </UI.Screen.Footer>

      </UI.Screen.Column>
    )
  }
  title = this.props.navigation.state.params.title;

  renderList() {
    const { current } = this.state;
    const { offers } = this.props;

    const { title, renderFace, renderEnd, onSwipe, onLoad, onNavigate, onPressNext, onPressOffer, onPressDetails, onPressOrder, onToggleMode } = this;

    return (
      <UI.Screen style={{flex: 1}} scroll>

        <UI.Screen.Header>

          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back  onPress={onNavigate()}>
              {title}
            </UI.Screen.Header.Bar.Back>

            <UI.Screen.Header.Bar.Filters onPress={() => onToggleMode('fullscreen')}>
              Plein écran
            </UI.Screen.Header.Bar.Filters>
          </UI.Screen.Header.Bar>

          <UI.Screen.Column style={{paddingTop: 15}}>
            <UI.Component.Search
              onSearch={(query) => console.log(query)}
              onPressFilter={onNavigate('Search')}
            />
          </UI.Screen.Column>

        </UI.Screen.Header>

        <UI.Screen.Title  style={{marginBottom: 30}} dark>
          {title}
        </UI.Screen.Title>

        <UI.Screen.Column style={{paddingLeft: 15}}>
          <UI.Component.Offers
            models={offers}
            onPress={offer => onPressDetails(offer)()}
          />
        </UI.Screen.Column>

        <UI.Screen.Footer>
          <UI.Component.Button onPress={onNavigate('RecordVideo')}>Créer une demande</UI.Component.Button>
        </UI.Screen.Footer>
      </UI.Screen>
    )
  }
  renderFullScreen() {
    const { current } = this.state;
    const { offers } = this.props;
    const { title } = this.props.navigation.state.params;
    const { renderFace, renderEnd, onSwipe, onLoad, onNavigate, onPressNext, onPressOffer, onPressDetails, onPressOrder, onToggleMode } = this;

    return (
      <UI.Screen style={{flex: 1}}>

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

        <UI.Screen.Header style={{position: 'absolute', top: 25, left: 0}}>

          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back  onPress={onNavigate()}>
              {title}
              {/*<UI.Category light>{title}</UI.Category>*/}
            </UI.Screen.Header.Bar.Back>

            <UI.Screen.Header.Bar.Filters onPress={() => onToggleMode('list')} light>
              Liste
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
      </UI.Screen>
    )
  }

  render() {
    return this.state.mode === 'fullscreen'
      ? this.renderFullScreen()
      : this.renderList()
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
