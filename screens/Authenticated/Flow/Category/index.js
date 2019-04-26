import React from 'react';

import connect from 'utils/connect';

import * as UI from './ui'

class CategoryScreen extends React.Component {
  componentWillMount() {
    const { Offer } = this.props;
    Offer.find()
  }

  onPressOffer = offer => e => {
    const { category } = this.props.navigation.state.params;
    this.props.navigation.navigate('Offer', { category, offer })
  }

  onPressDetails = offer => e => {
    const { category } = this.props.navigation.state.params;
    this.props.navigation.navigate('Offer', { category, offer })
  }

  onPressOrder = offer => e => {
    const { category } = this.props.navigation.state.params;
    this.props.navigation.navigate('Offer', { category, offer })
  }

  onNavigateBack = screen => e => {
    const { Category, navigation } = this.props
    navigation.pop()
  }

  onPressNext = index => e => {
    this.cube.scrollTo(index + 1, false)
  }

  render() {
    console.log('[ CATEGORY SCREEN ] render : ', this.props);
    const { offers } = this.props;
    const { category } = this.props.navigation.state.params;
    const { onNavigateBack, onPressNext, onPressOffer, onPressDetails, onPressOrder } = this;

    return (
      <UI.View>
        <UI.CubeNavigationHorizontal ref={view => { this.cube = view; }}>
        {
          offers.map((offer, i) => (
            <UI.Screen key={offer.id} style={{backgroundColor: '#2E3B55'}}>
                <UI.Screen.Content>
                  <UI.Gradient
                    start={{x: 0, y: 0}} end={{x: 0, y: 1}}
                    colors={['transparent', '#2E3B55']}
                    locations={[0,1]}
                    style={{flex: 1, justifyContent: 'flex-end', alignSelf:'stretch', padding: 30}}
                  >
                    <UI.Screen.Column style={{paddingBottom: 300}}>
                      <UI.Title>{offer.description}</UI.Title>
                      <UI.Button type="default" onPress={onPressNext(i)}>Next</UI.Button>
                    </UI.Screen.Column>
                  </UI.Gradient>
                </UI.Screen.Content>

            </UI.Screen>
          ))
        }
        </UI.CubeNavigationHorizontal>

        <UI.Screen.Header style={{position: 'absolute', top: 0, left: 0}}>

          <UI.Screen.Header.Bar onPress={onNavigateBack()}>
            <UI.Screen.Header.Bar.Back light>
              <UI.Category light>{category.title}</UI.Category>
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>

          <UI.Liner />

        </UI.Screen.Header>
        <UI.Screen.Footer style={{ position: 'absolute', top: 590, left: 0, height: 300 }}>

        <UI.Liner style={{marginBottom: 30}}/>
        <UI.Offer model={offers[0]} onPress={onPressOffer(offers[0])}/>
        <UI.Liner style={{marginTop: 30}}/>

        <UI.Screen.Row style={{ justifyContent: 'space-between', alignSelf: 'stretch' }}>
          <UI.Button type="default" onPress={onPressDetails(offers[0])}>Détails</UI.Button>
          <UI.Button type="primary" onPress={onPressOrder(offers[0])}>Réserver</UI.Button>
        </UI.Screen.Row>

        </UI.Screen.Footer>
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
)(CategoryScreen);
