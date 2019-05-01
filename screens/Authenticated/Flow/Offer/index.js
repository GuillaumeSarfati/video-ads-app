import React from 'react';
import { NavigationActions } from 'react-navigation';
import connect from 'utils/connect';

import * as UI from './ui'

class OfferScreen extends React.Component {

  onNavigate = screen => e => {
    const { navigation } = this.props;

    screen
    ? navigation.navigate(screen)
    : navigation.pop()
  }

  render() {
    const { offer, category } = this.props.navigation.state.params
    const { onNavigate } = this

    return (
      <UI.Screen scroll>
        <UI.Screen.Header>
          <UI.Screen.Header.Bar>
            <UI.Screen.Header.Bar.Back onPress={onNavigate()}>
              <UI.Category>{category.title}</UI.Category>
            </UI.Screen.Header.Bar.Back>

          </UI.Screen.Header.Bar>
          <UI.Transition shared={`offer${offer.id}`}>
          <UI.Offer model={offer} dark/>
          </UI.Transition>
        </UI.Screen.Header>

        <UI.Screen.Content style={{padding: 30}}>
          <UI.Screen.Label dark>Description de l'annonce</UI.Screen.Label>
          <UI.Screen.Liner dark/>
          <UI.Screen.Description style={{fontWeight: '500', marginBottom: 30 }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.
          </UI.Screen.Description>
          <UI.Screen.Label dark>Commentaires</UI.Screen.Label>
          <UI.Screen.Liner dark/>
          <UI.Comment />
          <UI.Comment />
          <UI.Comment />
        </UI.Screen.Content>
        <UI.Screen.Footer>
          <UI.Transition anchor={`offer${offer.id}`}>
            <UI.Button onPress={onNavigate()}>Contacter</UI.Button>
          </UI.Transition>
        </UI.Screen.Footer>
      </UI.Screen>
    )

  }
}

export default connect(
  state => ({}),
  (dispatch, props, models) => ({}),
)(OfferScreen);
