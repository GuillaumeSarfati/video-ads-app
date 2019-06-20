import React from 'react';
import { NavigationActions } from 'react-navigation';
import { For } from 'react-loops';
import connect from 'utils/connect';

import * as UI from './ui'

class CreateScreen extends React.Component {
  offer = {
    description: '',
    distance: 1,
    price: 20,
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
    this.offer[property] = value
    console.log('this.offer : ', this.offer);
  }

  render() {
    const { categories } = this.props
    const { onChange, onNavigate } = this
    return (
      <UI.Screen scroll>

        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              Enregistrer une Pop Annonce
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Screen.Header.Title dark>Pop Annonce</UI.Screen.Header.Title>
        </UI.Screen.Header>

        <UI.Screen.Content>

        <UI.Screen.Column style={{paddingHorizontal: 30}}>
          <UI.Screen.Label dark>DESCRIPTION DE LA POP ANNONCE</UI.Screen.Label>
          <UI.Component.TextInput
            onChangeText={onChange('description')}
            placeholder="Description"
            multiline
          />
          <UI.Screen.Liner dark/>
        </UI.Screen.Column>

        {/*
        <UI.Screen.Column style={{paddingHorizontal: 30}}>
          <UI.Screen.Label dark>CATEGORIES</UI.Screen.Label>
          <UI.Screen.Liner dark/>
        </UI.Screen.Column>

        <UI.Screen.Row style={{justifyContent: 'center', marginBottom: 30}}>
          <UI.ScrollView contentContainerStyle={{padding: 50}} horizontal>
          <For of={categories} as={category => (
            <UI.Category model={category}/>
          )}/>
          </UI.ScrollView>
        </UI.Screen.Row>
        */}

        <UI.Price onChange={onChange('price')}/>
        <UI.Distance onChange={onChange('distance')}/>

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
)(CreateScreen);
