import React from 'react';
import { NavigationActions } from 'react-navigation';
import { For } from 'react-loops';
import connect from 'utils/connect';

import * as UI from './ui'

class SearchScreen extends React.Component {

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

  render() {
    const { categories } = this.props
    const { onNavigate } = this
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

        <UI.Screen.Row style={{paddingHorizontal: 30}}>
          <UI.Screen.Label dark>Categories</UI.Screen.Label>
          <UI.Screen.Liner dark/>
        </UI.Screen.Row>
        <UI.Screen.Row style={{justifyContent: 'center', marginBottom: 30}}>
          <UI.ScrollView contentContainerStyle={{padding: 50}} horizontal>
          <For of={categories} as={category => (
            <UI.Category model={category}/>
          )}/>
          </UI.ScrollView>
        </UI.Screen.Row>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
        <UI.Screen.Label dark>Prix</UI.Screen.Label>
        <UI.Screen.Liner dark/>
        <UI.Screen.Row style={{justifyContent: 'center', marginBottom: 30}}>
          <UI.Slider
            min={0}
            max={100}
            sliderLength={414 - 60}
            values={[18, 55]}
          />
        </UI.Screen.Row>
        </UI.Screen.Column>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
        <UI.Screen.Label dark>Distance</UI.Screen.Label>
        <UI.Screen.Liner dark/>
        <UI.Screen.Row style={{justifyContent: 'center', marginBottom: 30}}>
          <UI.Slider
            min={0}
            max={100}
            sliderLength={414 - 60}
            values={[18, 55]}
          />
        </UI.Screen.Row>
        </UI.Screen.Column>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
        <UI.Screen.Label dark>Recherche en fonction d'un lieu</UI.Screen.Label>
        <UI.Screen.Liner dark/>
        <UI.Screen.Row style={{justifyContent: 'center', marginBottom: 30}}>
        <UI.MapView
          style={{ width: 414 - 60, height: 414 - 60, borderRadius: 8 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        </UI.Screen.Row>
        </UI.Screen.Column>

        </UI.Screen.Content>

        <UI.Screen.Footer>
          <UI.Button large>Lancer la recherche</UI.Button>
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
  }),
)(SearchScreen);
