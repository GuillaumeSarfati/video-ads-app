import React from 'react';
import { NavigationActions } from 'react-navigation';
import { For } from 'react-loops';
import connect from 'utils/connect';

import * as UI from './ui'

class SearchScreen extends React.Component {
  state = {
    price: [20, 140],
    distance: [0, 10],
  }

  componentWillMount() {
    const { Category } = this.props;
    Category.find()
  }

  onNavigate = screen => e => {
    const { navigation } = this.props;

    screen
    ? navigation.navigate(screen)
    : navigation.pop()
  }

  onChange = property => value => {
    this.setState({ [property]: value })
  }


  onSearch = () => {
    const { Offer } = this.props;

    Offer.find({
      filter: {
        where: {
          price: { between: this.state.price },
          geoloc: {
            near: this.state.geoloc,
            maxDistance: this.state.distance,
            unit: 'kilometers'
          },
        },
      },
    })
  }

  render() {
    const { price, distance } = this.state
    const { categories } = this.props
    const { onNavigate, onChange, onSearch } = this
    return (
      <UI.Screen scroll>

        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Categories
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Recherche</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Content>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
          <UI.Screen.Label dark>CATEGORIES</UI.Screen.Label>
        </UI.Screen.Column>
        <UI.Screen.Row style={{justifyContent: 'center', }}>
          <UI.ScrollView contentContainerStyle={{padding: 30}} horizontal>
          <For of={categories} as={category => (
            <UI.Category model={category}/>
          )}/>
          </UI.ScrollView>
        </UI.Screen.Row>
        <UI.Screen.Column style={{paddingHorizontal: 30, marginBottom: 30}}>
          <UI.Screen.Liner dark/>
        </UI.Screen.Column>

        <UI.Price values={price} onChange={onChange('price')}/>
        <UI.Distance values={distance} onChangeGeoloc={onChange('geoloc')} onChangeDistance={onChange('distance')}/>

        </UI.Screen.Content>

        <UI.Screen.Footer>
          <UI.Button onPress={onSearch} large>Lancer la recherche</UI.Button>
        </UI.Screen.Footer>

      </UI.Screen>
    )

  }
}

export default connect(
  state => ({
    categories: state.categories,
  }),
  (dispatch, props, models) => ({
    Category: models.Category,
    Offer: models.Offer,
  }),
)(SearchScreen);
